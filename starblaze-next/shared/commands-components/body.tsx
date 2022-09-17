import React from "react";
import { VStack, Text, Code } from "@chakra-ui/react";

export default function CommandsBody() {
  return (
    <>
      <VStack justify="center" align="center" spacing={5} pt={25}>
        <Text fontSize="2xl" fontWeight="bold">
          Commands
        </Text>
        <Text fontSize="xl">All of the commands listed for Rin</Text>
        <Text fontSize="xl">
          Commands Prefix: <Code>/</Code>
        </Text>
      </VStack>
    </>
  );
}
