"use client";
import React, { useState, useEffect } from "react";
import HypeMessage from "./HypeMessage";

type ConfirmStakeModalProps = {
  isOpen: boolean;
  stakeAmount: number;
  onCancel: () => void;
  onConfirm: () => Promise<void>; // Now returns a Promise
};

export const ConfirmStakeModal: React.FC<ConfirmStakeModalProps> = ({
  isOpen,
  stakeAmount,
  onCancel,
  onConfirm,
}) => {
  const treasuryFee = stakeAmount * 0.1;
  const winnerPayout = stakeAmount * 0.9;
  const totalWinnerPayout = stakeAmount + winnerPayout;

  const [isSigning, setIsSigning] = useState(false);
  const [showHype, setShowHype] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsSigning(false);
      setShowHype(false);
    }
  }, [isOpen]);

  const handleConfirm = async () => {
    setIsSigning(true); // 1. Show Loading
    try {
      await onConfirm(); // 2. Wait for Wallet Signature
      setShowHype(true); // 3. ONLY show Hype if success
      // Close is handled by parent after a delay
    } catch (error) {
      console.error("Transaction failed", error);
      setIsSigning(false); // Reset if failed
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)", // Darker background
        display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a", // Dark theme
          color: "#fff",
          borderRadius: 16,
          padding: 32,
          maxWidth: 450,
          width: "90%",
          border: "1px solid #333",
          boxShadow: "0 4px 20px rgba(0,255,0,0.1)",
          textAlign: "center",
          position: "relative",
        }}
      >
        {showHype ? (
          <HypeMessage message="STAKED! 🔥" />
        ) : (
          <>
            <h2 style={{ marginTop: 0, color: "#39ff14" }}>Confirm Stake</h2>
            
            <div style={{ margin: "20px 0", padding: "15px", backgroundColor: "#2a2a2a", borderRadius: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#888" }}>Stake:</span>
                <span style={{ fontWeight: "bold" }}>{stakeAmount.toFixed(2)} SOL</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#888" }}>Fee (10%):</span>
                <span>{treasuryFee.toFixed(2)} SOL</span>
              </div>
              <div style={{ borderTop: "1px solid #444", paddingTop: 8, display: "flex", justifyContent: "space-between", color: "#39ff14" }}>
                <span>Potential Win:</span>
                <span style={{ fontWeight: "bold" }}>{totalWinnerPayout.toFixed(2)} SOL</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <button
                onClick={onCancel}
                disabled={isSigning}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: 8,
                  border: "1px solid #444",
                  backgroundColor: "transparent",
                  color: "#fff",
                  cursor: isSigning ? "not-allowed" : "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={isSigning}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  backgroundColor: isSigning ? "#555" : "#39ff14",
                  color: isSigning ? "#ccc" : "#000",
                  fontWeight: "bold",
                  cursor: isSigning ? "not-allowed" : "pointer",
                }}
              >
                {isSigning ? "Signing..." : "Confirm & Stake"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmStakeModal;