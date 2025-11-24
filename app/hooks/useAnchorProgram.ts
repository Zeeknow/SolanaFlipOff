import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider, Program, Idl, setProvider } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { useMemo } from "react";

// Import the JSON
import idlSource from "../idl/solana_flip_off.json"; 

// YOUR PROGRAM ID
const PROGRAM_ID = new PublicKey("5hfBCMBJLM9t9UfBqQcwcN4R15nLuLFC8GtBQEN6JRcb");

export function useAnchorProgram() {
  const { connection } = useConnection();
  // FIX: Get the signer functions directly, not just the 'wallet' object
  const { publicKey, signTransaction, signAllTransactions } = useWallet();

  const provider = useMemo(() => {
    if (!connection || !publicKey || !signTransaction || !signAllTransactions) {
        return null;
    }

    // FIX: Create a custom object that looks exactly like what Anchor wants
    const anchorWallet = {
        publicKey: publicKey,
        signTransaction: signTransaction,
        signAllTransactions: signAllTransactions,
    };

    const provider = new AnchorProvider(connection, anchorWallet, {
      preflightCommitment: "processed",
    });
    
    setProvider(provider);
    return provider;
  }, [connection, publicKey, signTransaction, signAllTransactions]);

  const program = useMemo(() => {
    if (!provider) return null;

    // Safe Unwrap of IDL
    const idl = (idlSource as any).default ? (idlSource as any).default : idlSource;

    if (!idl) {
        console.error("IDL not found!");
        return null;
    }

    return new Program(idl as Idl, provider);
  }, [provider]);

  return program;
}