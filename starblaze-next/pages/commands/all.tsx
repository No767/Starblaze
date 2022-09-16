import { QueryClientProvider, useQuery } from "@tanstack/react-query";
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
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import type { NextPage } from "next";
import NavBar from "../../shared/shared-components/navbar";
import GetAllCommands from "../../shared/commands-components/get-all-commands-component";
import { getData } from "../../shared/hooks/getData";

const AllCommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <GetAllCommands />
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["allRepoData"], () => getData());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default AllCommandsIndex;
