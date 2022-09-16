import React from "react";
import { useData } from "../hooks/getData";

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
export default function GetAllCommands() {
  const { data, isLoading } = useData();

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {Object.keys(data.data).map((key) => (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Text>{data.data[key].name}</Text>
        </Box>
      ))}
    </div>
  );
}
