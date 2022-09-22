import React from "react";
import NextLink from "next/link";
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
  AccordionIcon,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";
import { MdOutlineCode } from "react-icons/md";

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
        <Text fontSize="lg">Total Commands: {data.count}</Text>
        <NextLink href="/commands" passHref>
          <Button
            variant="outline"
            leftIcon={<MdOutlineCode />}
            borderColor="gray.500"
            size="md"
            as="a"
          >
            Commands
          </Button>
        </NextLink>
      </VStack>

      <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }} pb={50}>
        {Object.keys(data.data).map((keyMainAllCommands) => (
          <Accordion allowToggle pt={30} mx={25}>
            <Box borderWidth="1px" borderRadius="lg">
              <AccordionItem>
                <AccordionButton>
                  <Container maxW="9xl" textAlign="left">
                    <Heading as="h6" size="md">
                      {data.data[keyMainAllCommands].name}
                    </Heading>
                    <Text pt={3}>
                      {data.data[keyMainAllCommands].description}
                    </Text>
                  </Container>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <Text align="left" pl={4}>
                    Module: {data.data[keyMainAllCommands].module}
                  </Text>
                  <Text align="left" pl={4}>
                    Parent Command: {data.data[keyMainAllCommands].parent_name}
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
