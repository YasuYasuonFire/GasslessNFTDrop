import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useAddress } from "@thirdweb-dev/react";


const Home: NextPage = () => {
  const address = useAddress();
  const OpenseaURL = "https://testnets.opensea.io/" + address;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        { <h1 className={styles.title}>
            かねりん芋屋SBTをGET！
        </h1>
         }
        <p></p>
        <div className={styles.connect}>
          { <ConnectWallet />}
          {address && (
          <Web3Button
            contractAddress="0x5c08Bb7E5cE4993069dB4a3435fE4dcE8a376518"
            action={(contract) => contract.erc721.claim(1)}
            >Claim</Web3Button>
          )}
        </div>
        <div className={styles.connect}>
          <a href={OpenseaURL} target="_blank">
            <button>OpenSeaで自分のウォレットを見る</button>
          </a>
        </div>

        {/* <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
