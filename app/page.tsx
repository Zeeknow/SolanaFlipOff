"use client";

import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Lobby from "./components/Lobby";
import GameArena from "./components/GameArena";

export default function Home() {
  const { connected } = useWallet();
  
  // State to hold the active game address
  const [activeGame, setActiveGame] = useState<PublicKey | null>(null);

  if (!connected) {
    return (
      <div style={{ 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#000",
        color: "#fff", 
        fontFamily: "monospace",
        fontSize: "18px"
      }}>
        Please connect your wallet to play.
      </div>
    );
  }

  // If no game selected, show Lobby
  if (!activeGame) {
    return <Lobby setActiveGame={setActiveGame} />;
  }

  // If game selected, show Arena (which handles Firebase syncing)
  return (
    <GameArena
      gameAccount={activeGame}
      gameState={null as any} 
    />
  );
}