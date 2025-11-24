"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useAnchorProgram } from "../hooks/useAnchorProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import useSound from "use-sound";
// @ts-ignore
import { BN } from "@coral-xyz/anchor";

type Props = {
  gameAccount: PublicKey;
  gameState: any;
};

export default function GameArena({ gameAccount, gameState: initialGameState }: Props) {
  const program = useAnchorProgram();
  const { publicKey } = useWallet();
  
  // State
  const [currentGameState, setCurrentGameState] = useState<any>(initialGameState);
  const [bottleState, setBottleState] = useState<'stand' | 'fall'>('stand');
  const [isFlipping, setIsFlipping] = useState(false);
  const [gaugePosition, setGaugePosition] = useState(0);
  
  const [gameStatus, setGameStatus] = useState<string>("WAITING");
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const [showClaim, setShowClaim] = useState(false);

  // LOCAL SCOREBOARD
  const [localP1Score, setLocalP1Score] = useState(0);
  const [localP2Score, setLocalP2Score] = useState(0);

  const gameStateRef = useRef<any>(initialGameState);
  const requestRef = useRef<number | null>(null);
  const isInteractionLocked = useRef(false); 
  
  const [startTime, setStartTime] = useState<number>(0);

  const [playSuccess] = useSound('/sounds/bottle-stand.wav');
  const [playFail] = useSound('/sounds/bottle-fall.wav');

  // 1. SETUP & SYNC LOOP
  const fetchGameData = useCallback(async () => {
    if (!program || !gameAccount) return;
    try {
      // @ts-ignore
      const account = await program.account.game.fetch(gameAccount);
      setCurrentGameState(account);
      gameStateRef.current = account;

      const p1 = account.playerOne.toString();
      const p2 = account.playerTwo.toString();
      
      // Check if P2 has joined (Is P2 NOT the default 1111... address?)
      // We use PublicKey.default to be safe
      const isP2Joined = p2 !== PublicKey.default.toString();

      // Logic to transition from WAITING -> ACTIVE
      if (isP2Joined) {
          // If we were waiting, OR if we just loaded in and need to start
          if (gameStatus === "WAITING") {
              console.log("🚀 P2 Detected! Starting Game...");
              setGameStatus("ACTIVE");
              setActivePlayer(p1); // P1 always starts
              setStartTime(Date.now()); 
          }
          
          // Also sync active player if it changes
          const chainActive = account.activePlayer.toString();
          if (activePlayer !== chainActive && !isFlipping) {
             setActivePlayer(chainActive);
          }
      }

    } catch (err) {
      if ((err as any).message?.includes("Account does not exist")) {
          setGameStatus("CLOSED"); 
      }
    }
  }, [program, gameAccount, gameStatus, activePlayer, isFlipping]);

  useEffect(() => {
    fetchGameData();
    const interval = setInterval(fetchGameData, 2000); // Poll every 2s
    return () => clearInterval(interval);
  }, [fetchGameData]);

  // 2. GAUGE ANIMATION
  const animateGauge = useCallback(() => {
    if (isInteractionLocked.current || gameStatus === "FINISHED" || gameStatus === "CLOSED") return;

    if (startTime > 0) {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000;
        const cyclePosition = (elapsed % 2.8) / 2.8; 
        setGaugePosition(cyclePosition * 100);
    }
    requestRef.current = requestAnimationFrame(animateGauge);
  }, [gameStatus, startTime]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateGauge);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [animateGauge]);

  // 3. HANDLE TAP
  const handleTap = async () => {
    if (isFlipping || isInteractionLocked.current || gameStatus !== "ACTIVE") return;
    
    const myKey = publicKey?.toString();
    if (activePlayer !== myKey) return alert("Wait for your turn!");

    isInteractionLocked.current = true;
    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    const now = Date.now();
    const elapsed = (now - startTime) / 1000;
    const cyclePos = ((elapsed % 2.8) / 2.8) * 100;
    setGaugePosition(cyclePos);

    const isWin = cyclePos >= 46 && cyclePos <= 54;

    setIsFlipping(true);

    setTimeout(() => {
        setIsFlipping(false);
        
        let gameIsOver = false;

        if (isWin) {
            playSuccess();
            setBottleState('stand');
            
            if (activePlayer === currentGameState.playerOne.toString()) {
                const newScore = localP1Score + 1;
                setLocalP1Score(newScore);
                if (newScore >= 3) {
                    setGameStatus("FINISHED"); 
                    setShowClaim(true);
                    gameIsOver = true;
                }
            } else {
                const newScore = localP2Score + 1;
                setLocalP2Score(newScore);
                if (newScore >= 3) {
                    setGameStatus("FINISHED");
                    setShowClaim(true);
                    gameIsOver = true;
                }
            }
        } else {
            playFail();
            setBottleState('fall');
        }

        if (!gameIsOver) {
            const p1 = currentGameState.playerOne.toString();
            const p2 = currentGameState.playerTwo.toString();
            setActivePlayer(activePlayer === p1 ? p2 : p1);
        }

        setTimeout(() => {
            if (!gameIsOver) {
                setBottleState('stand'); 
                isInteractionLocked.current = false; 
                animateGauge(); 
            }
        }, 2000);

    }, 700);
  };

  // 4. CLAIM PRIZE
  const handleClaim = async () => {
      if (!program || !publicKey) return;
      try {
          const isP1 = currentGameState.playerOne.toString() === publicKey.toString();
          const loserKey = isP1 ? currentGameState.playerTwo : currentGameState.playerOne;

          await program.methods.claimVictory()
            .accounts({
                gameAccount: gameAccount,
                winner: publicKey,
            })
            .rpc();
          alert("$$$ PAYOUT RECEIVED $$$");
          window.location.reload();
      } catch (error) {
          console.error("Claim failed:", error);
          alert("Claim failed.");
      }
  };

  if (gameStatus === "CLOSED") return <div style={{height: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24}}>GAME OVER. PRIZE CLAIMED.</div>;
  
  if (!currentGameState) return <div style={{height: "100vh", background: "#000", color: "lime", display: "flex", alignItems: "center", justifyContent: "center"}}>LOADING...</div>;

  const myKey = publicKey?.toString();
  const p1Key = currentGameState?.playerOne?.toString();
  const isPlayerOne = myKey === p1Key;
  
  const isMyTurn = activePlayer === myKey;
  const myScore = isPlayerOne ? localP1Score : localP2Score;
  const oppScore = isPlayerOne ? localP2Score : localP1Score;

  return (
    <div className="arena-container">
      {/* @ts-ignore */}
      <style jsx>{`
        .arena-container { height: 100vh; width: 100vw; position: relative; overflow: hidden; background-color: #000; display: flex; justify-content: center; }
        .scoreboard { position: absolute; top: 20px; width: 100%; text-align: center; z-index: 20; color: #fff; font-weight: bold; text-shadow: 0 0 10px #000; }
        .score-box { background: rgba(0,0,0,0.8); display: inline-block; padding: 10px 30px; border-radius: 20px; border: 1px solid #333; font-size: 24px; }
        .table-object { position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%); width: 500px; max-width: 95%; height: auto; z-index: 5; pointer-events: none; }
        .bottle-container { position: absolute; bottom: 53%; left: 50%; transform: translateX(-50%); height: 200px; width: auto; pointer-events: none; z-index: 10; }
        .bottle-img { height: 100%; width: auto; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5)); transition: rotate 0.2s ease-in; }
        .flipping { animation: flipBottle 0.7s ease-in-out; }
        @keyframes flipBottle { 0% { transform: translateX(-50%) rotate(0deg) translateY(0); } 50% { transform: translateX(-50%) rotate(360deg) translateY(-250px) scale(1.2); } 100% { transform: translateX(-50%) rotate(720deg) translateY(0); } }
        .gauge-container { position: absolute; right: 30px; top: 20%; bottom: 20%; width: 30px; background: #111; border-radius: 15px; border: 2px solid #444; overflow: hidden; box-shadow: 0 0 20px #000; z-index: 20; }
        .success-zone { position: absolute; top: 46%; height: 8%; width: 100%; background: #39ff14; box-shadow: 0 0 15px #39ff14; }
        .pointer { position: absolute; left: 0; width: 100%; height: 6px; background: #fff; box-shadow: 0 0 10px #fff; }
        .claim-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.8); z-index: 50; display: flex; justify-content: center; alignItems: center; flex-direction: column; }
        .claim-btn { font-size: 32px; padding: 20px 40px; background: #39ff14; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; animation: pulse 1s infinite; margin-top: 20px; }
      `}</style>

      <div className="scoreboard">
        <div className="score-box">YOU: <span style={{color:"#39ff14"}}>{myScore}</span> vs OPP: <span style={{color:"#ff0055"}}>{oppScore}</span></div>
        <div style={{marginTop: 10, fontSize: 18, color: isMyTurn ? "#39ff14" : "#666"}}>
            {gameStatus === "ACTIVE" ? (isMyTurn ? "YOUR TURN! TAP!" : "Opponent's Turn...") : (gameStatus === "FINISHED" ? (myScore >=3 ? "YOU WON!" : "YOU LOST") : "Waiting for Player 2...")}
        </div>
      </div>

      <img src="/images/obsidian-table.png" alt="Table" className="table-object" />

      <div className={`bottle-container ${isFlipping ? "flipping" : ""}`}>
        <img src={bottleState === 'stand' ? "/images/bottle-stand.png" : "/images/bottle-fall.png"} alt="Bottle" className="bottle-img" style={{ rotate: bottleState === 'fall' && !isFlipping ? "90deg" : "0deg" }} />
      </div>

      <div className="gauge-container">
        <div className="success-zone" />
        <div className="pointer" style={{ top: `${gaugePosition}%` }} />
      </div>

      <div onClick={handleTap} style={{ position: "absolute", inset: 0, zIndex: 30, cursor: (isMyTurn && gameStatus === "ACTIVE") ? "pointer" : "not-allowed" }} />

      {showClaim && (
          <div className="claim-overlay">
              <h1 style={{color: "#fff", marginBottom: 20}}>VICTORY! 🏆</h1>
              <button className="claim-btn" onClick={handleClaim}>CLAIM PRIZE</button>
          </div>
      )}
    </div>
  );
}