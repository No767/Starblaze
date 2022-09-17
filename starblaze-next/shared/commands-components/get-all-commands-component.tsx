import React from "react";
import { useData } from "../hooks/getData";
import {
  VStack,
  Text,
  SimpleGrid,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Code,
} from "@chakra-ui/react";

export default function GetAllCommands() {
  const { data, isLoading } = useData();

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <VStack justify="center" align="center" spacing={3} pt={25}>
        <Text fontSize="2xl" fontWeight="bold">
          All Commands
        </Text>
        <Text fontSize="xl">All of the commands listed for Rin</Text>
        <Text fontSize="xl">
          Commands Prefix: <Code>/</Code>
        </Text>
      </VStack>

      <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }}>
        {Object.keys(data.data).map((keyMain) => (
          <Accordion allowToggle pt={30} mx={25}>
            <Box display="flex" borderWidth="1px" borderRadius="lg">
              <AccordionItem>
                <AccordionButton>
                  <Box maxW="lg" borderRadius="lg">
                    {/* @ts-ignore */}
                    <Heading as="h6" size="md" align="left">
                      {data.data[keyMain].name}
                    </Heading>
                    <Text align="left" pt={3}>
                      {data.data[keyMain].description}
                    </Text>
                  </Box>
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text align="left">Module: {data.data[keyMain].module}</Text>
                  <Text align="left">
                    Parent Command: {data.data[keyMain].parent_name}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Box>
          </Accordion>
        ))}
      </SimpleGrid>
    </div>
  );
}
