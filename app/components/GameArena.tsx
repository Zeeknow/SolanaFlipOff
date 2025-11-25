"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useAnchorProgram } from "../hooks/useAnchorProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import useSound from "use-sound";
// @ts-ignore
import { BN } from "@coral-xyz/anchor";

// FIREBASE
import { db } from "../firebase"; 
import { ref, onValue, set } from "firebase/database";

type Props = {
  gameAccount: PublicKey;
  gameState: any;
};

export default function GameArena({ gameAccount, gameState: initialGameState }: Props) {
  const program = useAnchorProgram();
  const { publicKey } = useWallet();
  
  // --- STATE ---
  const [firebaseData, setFirebaseData] = useState<any>(null);
  
  // Chain Data State (To track P2 joining)
  const [p1Key, setP1Key] = useState<string>("");
  const [p2Key, setP2Key] = useState<string>("");

  const [bottleState, setBottleState] = useState<'stand' | 'fall'>('stand');
  const [isFlipping, setIsFlipping] = useState(false);
  const [gaugePosition, setGaugePosition] = useState(0);
  const [showClaim, setShowClaim] = useState(false);

  const requestRef = useRef<number | null>(null);
  const isInteractionLocked = useRef(false); 
  const gameStateRef = useRef<any>(initialGameState);

  const [playSuccess] = useSound('/sounds/bottle-stand.wav');
  const [playFail] = useSound('/sounds/bottle-fall.wav');

  // 1. FETCH CHAIN DATA (POLLING LOOP)
  // We need this to detect when P2 joins the blockchain
  const fetchChainData = useCallback(async () => {
      if (!program || !gameAccount) return;
      try {
          // @ts-ignore
          const account = await program.account.game.fetch(gameAccount);
          gameStateRef.current = account;
          
          const p1 = account.playerOne.toString();
          const p2 = account.playerTwo.toString();
          
          // Update state if changed
          setP1Key(p1);
          if (p2 && p2 !== "11111111111111111111111111111111") {
              setP2Key(p2);
          }
      } catch(e) { console.log(e); }
  }, [program, gameAccount]);

  useEffect(() => {
      fetchChainData();
      const interval = setInterval(fetchChainData, 2000); // Poll every 2s
      return () => clearInterval(interval);
  }, [fetchChainData]);

  // 2. FIREBASE LISTENER
  useEffect(() => {
      if (!gameAccount || !publicKey) return;
      const gameRef = ref(db, 'games/' + gameAccount.toString());
      
      const unsubscribe = onValue(gameRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
              setFirebaseData(data);
              
              if (data.gameStatus === "FINISHED") {
                   const myKey = publicKey.toString();
                   // Determine winner for Claim button
                   if ((myKey === p1Key && data.p1Score > data.p2Score) || 
                       (myKey === p2Key && data.p2Score > data.p1Score)) {
                       setShowClaim(true);
                   }
              }
          } else {
              // Init Firebase if empty (Only if we know P1 key)
              if (p1Key && publicKey.toString() === p1Key) {
                  set(gameRef, {
                      p1Score: 0, p2Score: 0, turnCount: 0, gameStatus: "WAITING"
                  });
              }
          }
      });
      return () => unsubscribe();
  }, [gameAccount, publicKey, p1Key, p2Key]);

  // 3. AUTO-START (If P2 is found on chain)
  useEffect(() => {
      // If Firebase says WAITING, but we see P2 on chain...
      if (firebaseData?.gameStatus === "WAITING" && p2Key && p2Key !== "11111111111111111111111111111111") {
          console.log("P2 Detected! Starting Game...");
          
          // ANYONE can update this to unblock the game
          set(ref(db, 'games/' + gameAccount.toString()), {
              ...firebaseData,
              gameStatus: "ACTIVE"
          });
      }
  }, [p2Key, firebaseData, gameAccount]);

  // 4. GAUGE ANIMATION
  const animateGauge = useCallback(() => {
    if (isInteractionLocked.current || !firebaseData || (firebaseData.gameStatus !== "ACTIVE" && firebaseData.gameStatus !== "LAST_CHANCE" && firebaseData.gameStatus !== "SUDDEN_DEATH")) return;

    const now = Date.now() / 1000;
    const cyclePosition = (now % 2.8) / 2.8; 
    setGaugePosition(cyclePosition * 100);

    requestRef.current = requestAnimationFrame(animateGauge);
  }, [firebaseData]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateGauge);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [animateGauge]);

  // 5. HANDLE TAP
  const handleTap = async () => {
    if (!firebaseData || isFlipping || isInteractionLocked.current) return;
    if (firebaseData.gameStatus === "FINISHED" || firebaseData.gameStatus === "WAITING" || firebaseData.gameStatus === "CLOSED") return;

    const myKey = publicKey?.toString();
    
    const isP1Turn = firebaseData.turnCount % 2 === 0;
    const isMyTurn = (myKey === p1Key && isP1Turn) || (myKey === p2Key && !isP1Turn);

    if (!isMyTurn) return alert("Wait for your turn!");

    // FREEZE
    isInteractionLocked.current = true;
    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    // CALCULATE
    const now = Date.now() / 1000;
    const cyclePos = ((now % 2.8) / 2.8) * 100;
    setGaugePosition(cyclePos);

    const isWin = cyclePos >= 46 && cyclePos <= 54;

    // SPIN
    setIsFlipping(true);

    setTimeout(() => {
        setIsFlipping(false);
        
        let newP1 = firebaseData.p1Score;
        let newP2 = firebaseData.p2Score;
        
        if (isWin) {
            playSuccess();
            setBottleState('stand');
            if (myKey === p1Key) newP1++; else newP2++;
        } else {
            playFail();
            setBottleState('fall');
        }

        // FAIRNESS LOGIC
        let nextStatus = firebaseData.gameStatus;
        const currentTurn = firebaseData.turnCount;
        const p1JustPlayed = (currentTurn % 2 === 0);

        if (nextStatus === "SUDDEN_DEATH") {
            if (p1JustPlayed) { 
                // Wait for P2 
            } else {
                if (newP1 !== newP2) nextStatus = "FINISHED";
            }
        } 
        else if (nextStatus === "LAST_CHANCE") {
            if (newP1 === newP2) nextStatus = "SUDDEN_DEATH";
            else nextStatus = "FINISHED";
        } 
        else {
            if (newP1 >= 3 || newP2 >= 3) {
                if (newP1 > newP2) {
                    if (p1JustPlayed) nextStatus = "LAST_CHANCE";
                    else nextStatus = "FINISHED";
                } else if (newP2 > newP1) {
                    nextStatus = "FINISHED";
                } else {
                    nextStatus = "SUDDEN_DEATH";
                }
            }
        }

        const nextPlayer = (myKey === p1Key) ? p2Key : p1Key;

        set(ref(db, 'games/' + gameAccount.toString()), {
            p1Score: newP1,
            p2Score: newP2,
            gameStatus: nextStatus,
            turnCount: currentTurn + 1,
            activePlayer: nextStatus === "FINISHED" ? "NONE" : nextPlayer
        });

        setTimeout(() => {
            setBottleState('stand'); 
            isInteractionLocked.current = false; 
            animateGauge(); 
        }, 2000);

    }, 700);
  };

  const handleClaim = async () => {
      if (!program || !publicKey) return;
      try {
          const loserKey = publicKey?.toString() === p1Key ? p2Key : p1Key;
          const winnerPK = new PublicKey(publicKey.toString());
          const loserPK = new PublicKey(loserKey);

          await program.methods.resolveGame()
            .accounts({
                gameAccount: gameAccount,
                winnerPubkey: winnerPK, 
                loserPubkey: loserPK,
            })
            .rpc();
          alert("$$$ PAYOUT RECEIVED $$$");
          window.location.reload();
      } catch (error) {
          console.error("Claim failed:", error);
          alert("Claim failed.");
      }
  };

  if (!firebaseData) return <div style={{height: "100vh", background: "#000", color: "lime", display: "flex", alignItems: "center", justifyContent: "center"}}>CONNECTING...</div>;
  if (firebaseData.gameStatus === "CLOSED") return <div style={{height: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24}}>GAME OVER. PRIZE CLAIMED.</div>;

  const myKey = publicKey?.toString();
  const isPlayerOne = myKey === p1Key;
  const isMyTurn = firebaseData.activePlayer === myKey;
  const myScore = isPlayerOne ? firebaseData.p1Score : firebaseData.p2Score;
  const oppScore = isPlayerOne ? firebaseData.p2Score : firebaseData.p1Score;
  
  let statusText = "";
  if (firebaseData.gameStatus === "WAITING") statusText = "Waiting for Player 2...";
  else if (firebaseData.gameStatus === "ACTIVE") statusText = isMyTurn ? "YOUR TURN! TAP!" : "Opponent's Turn...";
  else if (firebaseData.gameStatus === "LAST_CHANCE") statusText = isMyTurn ? "LAST CHANCE TO TIE! 😱" : "Opponent's Last Chance...";
  else if (firebaseData.gameStatus === "SUDDEN_DEATH") statusText = isMyTurn ? "SUDDEN DEATH! SCORE TO WIN!" : "Opponent's Turn (Sudden Death)...";
  else if (firebaseData.gameStatus === "FINISHED") statusText = (myScore > oppScore) ? "YOU WON! 🏆" : "YOU LOST 💀";

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
            {statusText}
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

      <div onClick={handleTap} style={{ position: "absolute", inset: 0, zIndex: 30, cursor: (isMyTurn && firebaseData.gameStatus !== "FINISHED") ? "pointer" : "not-allowed" }} />

      {showClaim && (
          <div className="claim-overlay">
              <h1 style={{color: "#fff", marginBottom: 20}}>VICTORY! 🏆</h1>
              <button className="claim-btn" onClick={handleClaim}>CLAIM PRIZE</button>
          </div>
      )}
    </div>
  );
}