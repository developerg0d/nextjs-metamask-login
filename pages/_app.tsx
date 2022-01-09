import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <DAppProvider config={{}}>
        <Component {...pageProps} />
      </DAppProvider>
    </React.StrictMode>
  );
}

export default MyApp;
