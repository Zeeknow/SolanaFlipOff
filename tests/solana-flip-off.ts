import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaFlipOff } from "../target/types/solana_flip_off";

describe("solana-flip-off", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.solanaFlipOff as Program<SolanaFlipOff>;

  it("Program loads successfully", async () => {
    // The program is loaded and ready
    console.log("Program ID:", program.programId.toBase58());
  });
});
