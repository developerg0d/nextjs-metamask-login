import { useEthers } from "@usedapp/core";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { activateBrowserWallet, account } = useEthers();

  function ConnectMetaMask() {
    activateBrowserWallet();
  }

  return (
    <div>
      <Head>
        <title>Metamask Web3 Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <h1>MetaMask Login</h1>
        <button
          style={{
            background: "white",
            color: "black",
            border: "none",
            padding: "10px",
            fontWeight: "900",
            cursor: "pointer",
          }}
          onClick={ConnectMetaMask}
        >
          Connect
        </button>
      </main>
    </div>
  );
};

export default Home;
