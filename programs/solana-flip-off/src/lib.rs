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

    // Note: We removed play_turn entirely because gameplay is now off-chain.

    // CLAIM VICTORY (Cash Out)
    pub fn claim_victory(ctx: Context<ClaimVictory>) -> Result<()> {
        let game = &ctx.accounts.game_account;
        
        // Note: We removed the "check if finished" requirement because 
        // score tracking is now handled on the frontend.
        
        // Security: Only a player in this game can claim
        let signer_key = ctx.accounts.winner.key();
        require!(
            signer_key == game.player_one || signer_key == game.player_two,
            GameError::Unauthorized
        );

        let treasury_fee = game.stake_amount / 10;
        let total_payout = (game.stake_amount * 2) - treasury_fee;

        let game_id_bytes = game.game_id.to_le_bytes();
        let seeds = &[
            b"game",
            game.player_one.as_ref(),
            game_id_bytes.as_ref(),
            &[ctx.bumps.game_account],
        ];
        let signer_seeds = &[&seeds[..]];

        let cpi_program = ctx.accounts.system_program.to_account_info();

        // Pay Treasury
        let cpi_accounts_treasury = Transfer {
            from: ctx.accounts.game_account.to_account_info(),
            to: ctx.accounts.treasury_wallet_pubkey.to_account_info(),
        };
        transfer(CpiContext::new_with_signer(cpi_program.clone(), cpi_accounts_treasury, signer_seeds), treasury_fee)?;

        // Pay Winner
        let cpi_accounts_winner = Transfer {
            from: ctx.accounts.game_account.to_account_info(),
            to: ctx.accounts.winner.to_account_info(),
        };
        transfer(CpiContext::new_with_signer(cpi_program.clone(), cpi_accounts_winner, signer_seeds), total_payout)?;

        Ok(())
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq, Debug)]
pub enum GameState { WaitingForPlayer, Active, Finished }

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
pub struct ClaimVictory<'info> {
    #[account(
        mut,
        close = winner, // Close account and send rent to winner
        seeds = [b"game", game_account.player_one.as_ref(), &game_account.game_id.to_le_bytes()],
        bump
    )]
    pub game_account: Account<'info, Game>,
    
    #[account(mut)]
    pub winner: Signer<'info>,

    #[account(mut, address = TREASURY_PUBKEY)]
    pub treasury_wallet_pubkey: UncheckedAccount<'info>,
    
    pub system_program: Program<'info, System>,
}

#[error_code]
pub enum GameError {
    #[msg("Invalid game state.")] InvalidGameState,
    #[msg("Player already joined.")] AlreadyJoined,
    #[msg("Unauthorized.")] Unauthorized,
    #[msg("Insufficient stake.")] InsufficientStake,
}