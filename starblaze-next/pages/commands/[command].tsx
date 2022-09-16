import {
  QueryClient,
  dehydrate,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import NextLink from "next/link";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Show,
  Hide,
  Box,
  Flex,
  Container,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { useRouter, withRouter } from "next/router";

import type { NextPage } from "next";
import NavBar from "../../shared/shared-components/navbar";
import GetModuleCommands from "../../shared/commands-components/get-module-commands-component";
import { getDataModules } from "../../shared/hooks/getData";

const ModuleCommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <GetModuleCommands />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/commands/all"],
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const queryClient = new QueryClient();
  const command = context.params.command;
  await queryClient.prefetchQuery(["allModuleData"], () =>
    getDataModules(command)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default ModuleCommandsIndex;
