use anchor_lang::prelude::*;
use anchor_lang::system_program::{Transfer, transfer};
use anchor_lang::solana_program::pubkey::Pubkey;
use anchor_lang::solana_program::clock::Clock;

pub const TREASURY_PUBKEY: Pubkey = pubkey!("FMyx18iJ4jkMcbK4uFZHdcZLkkJVzfFaP798wsiErFuA");

declare_id!("5hfBCMBJLM9t9UfBqQcwcN4R15nLuLFC8GtBQEN6JRcb");

#[program]
pub mod solana_flip_off {
    use super::*;

    pub fn create_game(ctx: Context<CreateGame>, game_id: u64, stake_amount_lamports: u64) -> Result<()> {
        let player_one = &ctx.accounts.player_one;
        let cpi_program = ctx.accounts.system_program.to_account_info();
        let cpi_accounts = Transfer {
            from: player_one.to_account_info(),
            to: ctx.accounts.game_account.to_account_info(),
        };
        transfer(CpiContext::new(cpi_program, cpi_accounts), stake_amount_lamports)?;

        let game = &mut ctx.accounts.game_account;
        game.game_id = game_id;
        game.player_one = player_one.key();
        game.player_two = Pubkey::default();
        game.stake_amount = stake_amount_lamports;
        game.game_state = GameState::WaitingForPlayer;
        game.active_player = Pubkey::default();
        game.game_start_time = 0;
        Ok(())
    }

    pub fn join_game(ctx: Context<JoinGame>) -> Result<()> {
        let player_two = &ctx.accounts.player_two;
        require!(ctx.accounts.game_account.game_state == GameState::WaitingForPlayer, GameError::InvalidGameState);
        require!(player_two.key() != ctx.accounts.game_account.player_one, GameError::AlreadyJoined);

        let stake = ctx.accounts.game_account.stake_amount;
        let cpi_program = ctx.accounts.system_program.to_account_info();
        let cpi_accounts = Transfer {
            from: player_two.to_account_info(),
            to: ctx.accounts.game_account.to_account_info(),
        };
        transfer(CpiContext::new(cpi_program, cpi_accounts), stake)?;

        let game = &mut ctx.accounts.game_account;
        game.player_two = player_two.key();
        game.game_state = GameState::Active;
        game.active_player = game.player_one;
        game.game_start_time = ctx.accounts.clock.unix_timestamp;
        Ok(())
    }

    // --- PLAY TURN REMOVED (OFF-CHAIN GAMEPLAY) ---

    // --- FIXED RESOLVE GAME ---
    pub fn resolve_game(ctx: Context<ResolveGame>) -> Result<()> {
        let game = &ctx.accounts.game_account;
        
        // 1. Calculate Treasury Fee (10% of one stake, effectively 5% of pot)
        let treasury_fee = game.stake_amount / 10;

        // 2. Manual Transfer to Treasury (Bypasses "Data" error)
        let game_lamports = ctx.accounts.game_account.to_account_info();
        let treasury_lamports = ctx.accounts.treasury_wallet_pubkey.to_account_info();

        **game_lamports.try_borrow_mut_lamports()? -= treasury_fee;
        **treasury_lamports.try_borrow_mut_lamports()? += treasury_fee;

        // 3. Pay Winner
        // We don't need code here! 
        // The `close = winner_pubkey` constraint in the struct below AUTOMATICALLY
        // sends all remaining lamports (90% of pot + Rent) to the winner when the account closes.
        
        Ok(())
    }

    // TIMEOUT CLAIM
    pub fn claim_timeout_win(ctx: Context<ClaimTimeout>) -> Result<()> {
        let game = &ctx.accounts.game_account;
        let signer = ctx.accounts.signer.key();
        let clock = Clock::get()?;

        require!(game.game_state == GameState::Active, GameError::InvalidGameState);
        require!(signer != game.active_player, GameError::NotYourTurnToClaim);

        let time_since_last_move = clock.unix_timestamp - game.game_start_time;
        require!(time_since_last_move > 60, GameError::TimeoutNotReached);

        // Manual Transfer Logic here too for safety
        let treasury_fee = game.stake_amount / 10;
        let game_lamports = ctx.accounts.game_account.to_account_info();
        let treasury_lamports = ctx.accounts.treasury_wallet_pubkey.to_account_info();

        **game_lamports.try_borrow_mut_lamports()? -= treasury_fee;
        **treasury_lamports.try_borrow_mut_lamports()? += treasury_fee;

        // 'close = signer' handles the rest
        Ok(())
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq, Debug)]
pub enum GameState { WaitingForPlayer, Active, LastChance, SuddenDeath, Finished }

#[account]
pub struct Game {
    pub game_id: u64,
    pub player_one: Pubkey,
    pub player_two: Pubkey,
    pub stake_amount: u64,
    pub player_one_score: u8,
    pub player_two_score: u8,
    pub player_one_turns: u8,
    pub player_two_turns: u8,
    pub game_state: GameState,
    pub active_player: Pubkey,
    pub game_start_time: i64,
}

#[derive(Accounts)]
#[instruction(game_id: u64, stake_amount_lamports: u64)]
pub struct CreateGame<'info> {
    #[account(mut)]
    pub player_one: Signer<'info>,
    #[account(
        init, payer = player_one, seeds = [b"game", player_one.key().as_ref(), &game_id.to_le_bytes()], bump,
        space = 8 + 8 + 32 + 32 + 8 + 1 + 1 + 1 + 1 + 1 + 32 + 8
    )]
    pub game_account: Account<'info, Game>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct JoinGame<'info> {
    #[account(mut)]
    pub player_two: Signer<'info>,
    #[account(mut)]
    pub game_account: Account<'info, Game>,
    pub system_program: Program<'info, System>,
    pub clock: Sysvar<'info, Clock>,
}

#[derive(Accounts)]
pub struct PlayTurn<'info> {
    pub signer: Signer<'info>,
    #[account(mut)]
    pub game_account: Account<'info, Game>,
}

#[derive(Accounts)]
pub struct ResolveGame<'info> {
    #[account(
        mut,
        close = winner_pubkey, // <--- THIS MAGICALLY PAYS THE WINNER
        seeds = [b"game", game_account.player_one.as_ref(), &game_account.game_id.to_le_bytes()],
        bump
    )]
    pub game_account: Account<'info, Game>,

    /// CHECK: Winner validation is trusted in this P2P version
    #[account(mut)]
    pub winner_pubkey: UncheckedAccount<'info>,
    
    /// CHECK: Logging only
    pub loser_pubkey: UncheckedAccount<'info>,

    /// CHECK: Treasury
    #[account(mut, address = TREASURY_PUBKEY)]
    pub treasury_wallet_pubkey: UncheckedAccount<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ClaimTimeout<'info> {
    #[account(mut, close = signer, seeds = [b"game", game_account.player_one.as_ref(), &game_account.game_id.to_le_bytes()], bump)]
    pub game_account: Account<'info, Game>,
    
    #[account(mut)]
    pub signer: Signer<'info>,
    
    /// CHECK: Treasury
    #[account(mut, address = TREASURY_PUBKEY)]
    pub treasury_wallet_pubkey: UncheckedAccount<'info>,
    
    pub system_program: Program<'info, System>,
    pub clock: Sysvar<'info, Clock>,
}

#[error_code]
pub enum GameError {
    #[msg("Invalid game state.")] InvalidGameState,
    #[msg("Player already joined.")] AlreadyJoined,
    #[msg("Unauthorized.")] Unauthorized,
    #[msg("Insufficient stake.")] InsufficientStake,
    #[msg("Timeout not reached yet.")] TimeoutNotReached,
    #[msg("You cannot claim timeout on your own turn.")] NotYourTurnToClaim,
}
