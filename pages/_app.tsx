import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { WalletContextProvider } from "../hooks/useWallet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <WalletContextProvider>
          <Component {...pageProps} />
        </WalletContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
