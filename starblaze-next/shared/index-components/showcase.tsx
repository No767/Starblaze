import React from "react";
import NextLink from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Show,
  Hide,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Button,
  HStack,
  Flex,
  Spacer,
  Avatar,
  VStack,
  Heading,
  Center,
  Text,
  Container,
  SimpleGrid,
  Box,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { SiGithub, SiDiscord } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
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
                Rin includes services from AniList, Modrinth, MangaDex,
                MyAnimeList, Reddit, Twitter, and many more. These have been
                tested to the strictest standards to ensure that the user
                experience is of the greatest quality.
              </Text>
            </VStack>
            <VStack spacing={5} align="center" justify="center">
              <MdOutlineDashboardCustomize size={124} />
              <Text fontSize="2xl" pt={15} mx={50} align="center">
                Modular By Design
              </Text>
              <Text fontSize="xl" align="center">
                Rin is highly portable and can be entirely self-hosted using
                Docker without any external dependencies. Rin is also designed
                to serve as a base image, so developers can use Rin to build
                features on top of it. In fact,{" "}
                <NextLink href="https://github.com/No767/Kumiko" passHref>
                  <Link>Kumiko</Link>
                </NextLink>{" "}
                is designed to serve more features than Rin, including a economy
                system, a gacha system, and more.
              </Text>
            </VStack>
            <VStack spacing={5} align="center" justify="center">
              <SiGithub size={124} />
              <Text fontSize="2xl" pt={15} mx={50} align="center">
                Free and Open Source
              </Text>
              <Text fontSize="xl" align="center">
                Rin is also completely free and open source, unlike popular
                Discord bots, which many if not all are closed source.
                Ultimately, you as the end user or developer, will be able to
                have access to these services for free. Rin will always stay
                free and open source.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
}
