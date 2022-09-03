import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Button,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  ListItem,
  OrderedList,
  Center,
} from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";

export default function TOSBody() {
  return (
    <>
      <VStack align="center" spacing={15} pt={25} mx={50}>
        <Text fontSize="32px" fontWeight="semibold" align="center">
          Terms Of Service
        </Text>
        <Text fontSize="20px" align="center" fontWeight="bold">
          By violating one or more of these terms, this will result in
          consequences and an audit performed on such actions.
        </Text>
        <Center>
          <OrderedList spacing={5} pt={25}>
            <ListItem fontSize="18px">
              Do not spam the commands. Rin contacts the API endpoints, and thus
              may result in a rate limit if done so.
            </ListItem>
            <ListItem fontSize="18px">
              Do not spam-refresh the commands page.
            </ListItem>
          </OrderedList>
        </Center>
      </VStack>
    </>
  );
}
