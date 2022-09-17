import type { AppProps } from "next/app";
import type { NextPageContext } from "next";

import { ChakraProvider } from "@chakra-ui/react";

import mainTheme from "../shared/themes-components/theme";
import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState,
} from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type PageProps = {
  dehydratedState?: DehydratedState;
};

type ExtendedAppProps<P = {}> = {
  err?: NextPageContext["err"];
} & AppProps<P>;

function StarblazeApp({ Component, pageProps }: ExtendedAppProps<PageProps>) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={mainTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default StarblazeApp;
