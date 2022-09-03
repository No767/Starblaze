import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Button,
  VStack,
  Center,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { SiGithub, SiDiscord } from "react-icons/si";
import {
  MdOutlineCollections,
  MdOutlineDashboardCustomize,
} from "react-icons/md";

export default function IndexShowcase() {
  return (
    <>
      <VStack spacing={5} pt={30} align="center" justify="center" mx={50}>
        <Center>
          <Text size="xxl" align="center">
            A Discord bot focused on obtaining data from third-party services
            with ease
          </Text>
        </Center>
        <Box w="55%" pt={25}>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}>
            <Image
              src="/logos/rin-logo-256.svg"
              alt="Rin"
              width={256}
              height={256}
            />
            <Box w="100%" pt={5}>
              <VStack spacing={5} align="center" justify="center">
                <Text size="minixl" align="center">
                  Rin is a Discord bot that allows you to interact and fetch
                  data from multiple third-party services, such as MangaDex,
                  AniList, Twitter, Reddit, and many more.
                </Text>
                <NextLink
                  href="https://top.gg/bot/865883525932253184/invite"
                  passHref
                >
                  <Button
                    variant="outline"
                    leftIcon={<SiDiscord />}
                    borderColor="gray.500"
                    size="md"
                  >
                    Invite
                  </Button>
                </NextLink>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="100%" pt={5}>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 3 }} spacing={100}>
            <VStack spacing={5} align="center" justify="center">
              <MdOutlineCollections size={124} />
              <Text fontSize="2xl" pt={15} mx={50} align="center">
                10+ Services Integrated
              </Text>
              <Text fontSize="xl" align="center">
                Rin includes services from AniList, MangaDex, MyAnimeList, and
                much more.
              </Text>
            </VStack>
            <VStack spacing={5} align="center" justify="center">
              <MdOutlineDashboardCustomize size={124} />
              <Text fontSize="2xl" pt={15} mx={50} align="center">
                Modular By Design
              </Text>
              <Text fontSize="xl" align="center">
                Rin is highly portable and and can be used as a base for many
                more Discord bots.
              </Text>
            </VStack>
            <VStack spacing={5} align="center" justify="center">
              <SiGithub size={124} />
              <Text fontSize="2xl" pt={15} mx={50} align="center">
                Free and Open Source
              </Text>
              <Text fontSize="xl" align="center">
                Rin is also completely free and open source.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
}
