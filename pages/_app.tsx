import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        localWallet()
      ]}
      sdkOptions={{
        gasless:{
          openzeppelin:{relayerUrl:"https://api.defender.openzeppelin.com/autotasks/dc4c6ee9-f311-40e3-877f-351d49396c81/runs/webhook/b13d60c5-fe98-4c50-8ea0-8de0314380ed/BpKnDaLiBfZb1gT7ySSy9o"}
        }
      }}      
      >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
