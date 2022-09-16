import React from "react";
import { useModuleData } from "../hooks/getData";

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

export default function GetModuleCommands() {
  const { data, isLoading } = useModuleData("github");

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {Object.keys(data.data).map((key) => (
        <Text>{data.data[key].name}</Text>
      ))}
    </div>
  );
}
