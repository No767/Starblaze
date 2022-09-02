import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import mainTheme from "../shared/themes-components/theme";

function StarblazeApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default StarblazeApp;
