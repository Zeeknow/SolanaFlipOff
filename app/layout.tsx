"use client";

import React, { ReactNode, useMemo } from "react";
// 1. IMPORT DYNAMIC FROM NEXT
import dynamic from "next/dynamic"; 

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  // WalletMultiButton,  <-- DELETE THIS LINE (We will import it dynamically)
} from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";

// 2. CREATE THE DYNAMIC BUTTON WRAPPER (Disables SSR)
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <html lang="en">
      <body>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <header style={{ padding: 16, borderBottom: "1px solid #ccc", display: "flex", justifyContent: "flex-end" }}>
                {/* 3. USE THE DYNAMIC BUTTON INSTEAD OF THE NORMAL ONE */}
                <WalletMultiButtonDynamic />
              </header>
              <main>{children}</main>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}