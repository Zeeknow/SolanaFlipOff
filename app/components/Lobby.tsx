"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useAnchorProgram } from "../hooks/useAnchorProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js";
// @ts-ignore
import { BN } from "@coral-xyz/anchor";
import ConfirmStakeModal from "./ConfirmStakeModal";

type Props = {
  setActiveGame: (gameAccount: PublicKey) => void;
};

export default function Lobby({ setActiveGame }: Props) {
  const program = useAnchorProgram();
  const { publicKey } = useWallet();
  
  const [games, setGames] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stakeInput, setStakeInput] = useState("0.1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- 1. FETCH GAMES FROM BLOCKCHAIN ---
  const fetchGames = useCallback(async () => {
    if (!program) return;
    try {
      setIsLoading(true);
      // @ts-ignore
      const allGames = await program.account.game.all();
      
      // Filter: Only show games waiting for players
      const waitingGames = allGames.filter(
        (g: any) => JSON.stringify(g.account.gameState) === JSON.stringify({ waitingForPlayer: {} })
      );
      
      // Sort: Newest first
      waitingGames.sort((a: any, b: any) => b.account.gameStartTime - a.account.gameStartTime);
      setGames(waitingGames);
    } catch (err) {
      console.error("Error fetching games:", err);
    } finally {
      setIsLoading(false);
    }
  }, [program]);

  useEffect(() => {
    fetchGames();
    // Optional: Auto-refresh lobby every 5 seconds
    const interval = setInterval(fetchGames, 5000);
    return () => clearInterval(interval);
  }, [fetchGames]);

  // --- 2. CREATE GAME (ON-CHAIN) ---
  const handleCreateGame = async () => {
    if (!program || !publicKey) return;

    try {
      const stakeLamports = new BN(parseFloat(stakeInput) * LAMPORTS_PER_SOL);
      
      // Generate Unique ID (Timestamp) to prevent address collision
      const gameId = new BN(Date.now());

      // Derive PDA
      const [gamePda] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("game"), 
          publicKey.toBuffer(),
          gameId.toArrayLike(Buffer, "le", 8)
        ],
        program.programId
      );

      // Send Transaction
      const tx = await program.methods
        .createGame(gameId, stakeLamports)
        .accounts({
          playerOne: publicKey,
          gameAccount: gamePda,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      console.log("Game Created!", tx);
      
      // Switch to Arena
      setTimeout(() => {
        setIsModalOpen(false);
        setActiveGame(gamePda); 
      }, 1000);

    } catch (error) {
      console.error("Create failed:", error);
      // Don't throw here, so the modal stays open if it fails (user can retry)
    }
  };

  // --- 3. JOIN GAME (ON-CHAIN) ---
  const handleJoinGame = async (gamePublicKey: PublicKey) => {
    if (!program || !publicKey) return;
    try {
        const tx = await program.methods
            .joinGame()
            .accounts({
                playerTwo: publicKey,
                gameAccount: gamePublicKey,
                systemProgram: SystemProgram.programId,
            })
            .rpc();
        console.log("Joined Game!", tx);
        setActiveGame(gamePublicKey);
    } catch (error) {
        console.error("Join failed:", error);
        alert("Failed to join game. Check console.");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto", color: "white" }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <h1 style={{ margin: 0, color: "#39ff14", textShadow: "0 0 10px rgba(57, 255, 20, 0.5)" }}>FLIP-OFF LOBBY</h1>
        <button onClick={fetchGames} style={{ background: "none", border: "1px solid #333", color: "#888", padding: "5px 10px", borderRadius: 4, cursor: "pointer" }}>
          Refresh ↻
        </button>
      </div>

      {/* GAME LIST */}
      <div style={{ display: "grid", gap: 16, marginBottom: 100 }}>
        {!isLoading && games.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, border: "2px dashed #333", borderRadius: 12, color: "#666" }}>
            <p>No active games found.</p>
            <p>Create one to start!</p>
          </div>
        )}

        {games.map((g) => (
          <div key={g.publicKey.toString()} style={{ background: "#111", padding: "20px", borderRadius: 12, border: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ color: "#666", fontSize: 12, marginBottom: 4 }}>HOST</div>
              <div style={{ fontFamily: "monospace", color: "#fff" }}>{g.account.playerOne.toString().slice(0, 6)}...</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#666", fontSize: 12, marginBottom: 4 }}>STAKE</div>
              <div style={{ color: "#39ff14", fontWeight: "bold", fontSize: 20 }}>{(g.account.stakeAmount.toNumber() / LAMPORTS_PER_SOL).toFixed(2)} SOL</div>
            </div>
            <button
              onClick={() => handleJoinGame(g.publicKey)}
              disabled={g.account.playerOne.toString() === publicKey?.toString()}
              style={{ 
                backgroundColor: g.account.playerOne.toString() === publicKey?.toString() ? "#333" : "#39ff14", 
                color: "#000", border: "none", padding: "10px 24px", borderRadius: 8, fontWeight: "bold", cursor: "pointer",
                opacity: g.account.playerOne.toString() === publicKey?.toString() ? 0.5 : 1
              }}
            >
              {g.account.playerOne.toString() === publicKey?.toString() ? "YOURS" : "JOIN"}
            </button>
          </div>
        ))}
      </div>

      {/* CREATE BAR (Fixed Bottom) */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "20px", background: "rgba(0,0,0,0.9)", borderTop: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", gap: 15, zIndex: 100, backdropFilter: "blur(10px)" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#222", borderRadius: 10, padding: "5px 20px", border: "1px solid #444" }}>
            <span style={{color:"#888", marginRight: 10}}>Stake:</span>
            <input type="number" step="0.1" min="0.1" value={stakeInput} onChange={(e) => setStakeInput(e.target.value)} style={{ background: "transparent", border: "none", color: "#fff", fontSize: 20, width: 70, outline: "none", textAlign: "right" }} />
            <span style={{ color: "#39ff14", marginLeft: 5, fontWeight: "bold" }}>SOL</span>
        </div>
        
        <button onClick={() => setIsModalOpen(true)} style={{ backgroundColor: "#39ff14", color: "#000", border: "none", width: 60, height: 60, borderRadius: "50%", fontSize: 32, cursor: "pointer", boxShadow: "0 0 20px rgba(57, 255, 20, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 4 }}>
          +
        </button>
      </div>

      <ConfirmStakeModal
        isOpen={isModalOpen}
        stakeAmount={parseFloat(stakeInput) || 0}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleCreateGame}
      />
    </div>
  );
}