import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useModuleData } from "../hooks/getData";
import { Capitalize } from "../utils/capitalize";
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
  Heading,
  Container,
  Button,
} from "@chakra-ui/react";
import { MdOutlineCode } from "react-icons/md";

export default function GetModuleCommands() {
  const router = useRouter();
  const pathName: string = router.asPath;
  const parsedStr = pathName.substring(pathName.lastIndexOf("/") + 1);
  const { data, isLoading } = useModuleData(parsedStr);

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <VStack justify="center" align="center" spacing={3} pt={25}>
        <Text fontSize="2xl" fontWeight="bold">
          {Capitalize(parsedStr)}
        </Text>
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
        {Object.keys(data.data).map((keyMain) => (
          <Accordion allowToggle pt={30} mx={25}>
            <Box borderWidth="1px" borderRadius="lg">
              <AccordionItem>
                <AccordionButton>
                  <Container maxW="9xl" textAlign="left">
                    <Heading as="h6" size="md">
                      {data.data[keyMain].name}
                    </Heading>
                    <Text pt={3}>{data.data[keyMain].description}</Text>
                  </Container>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <Text align="left" pl={4}>
                    Module: {data.data[keyMain].module}
                  </Text>
                  <Text align="left" pl={4}>
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
