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
  Show,
  Hide,
} from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";
export default function IndexBody() {
  return (
    <>
      <Box w="100%" pt={200}>
        <Hide below="lg">
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} mx={50}>
            <Image
              src="/undraw-assets/collection.svg"
              width={512}
              height={512}
            />
            <VStack spacing={5} align="center" pt={25}>
              <Text fontSize="32px" fontWeight="semibold" align="center">
                A Wide Amount of Services Integrated
              </Text>
              <Text fontSize="20px" align="center">
                Rin includes commands from 10+ different services, such as
                AniList, MangaDex, Twitter, YouTube, and many others. For
                example, you can look up details about your favorite manga
                and/or anime, or find memes and posts from Reddit. These have
                been tested to the strictest standards to ensure that the user
                experience is of the greatest quality.
              </Text>
            </VStack>
          </SimpleGrid>
        </Hide>
        <Show below="lg">
          <VStack spacing={5} align="center" mx={50}>
            <Image
              src="/undraw-assets/collection.svg"
              width={512}
              height={512}
            />
            <VStack spacing={5} align="center" pt={25}>
              <Text fontSize="32px" fontWeight="semibold" align="center">
                A Wide Amount of Services Integrated
              </Text>
              <Text fontSize="20px" align="center">
                Rin includes commands from 10+ different services, such as
                AniList, MangaDex, Twitter, YouTube, and many others. For
                example, you can look up details about your favorite manga
                and/or anime, or find memes and posts from Reddit. These have
                been tested to the strictest standards to ensure that the user
                experience is of the greatest quality.
              </Text>
            </VStack>
          </VStack>
        </Show>
      </Box>

      <Box w="100%" pt={200}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} mx={50}>
          <Image
            src="/undraw-assets/customization.svg"
            width={512}
            height={512}
          />
          <VStack spacing={5} align="center" pt={25}>
            <Text fontSize="32px" fontWeight="semibold" align="center">
              Modular By Design
            </Text>
            <Text fontSize="20px" align="center">
              Rin is built to be highly portable, and can be used as a base for
              many other discord bots. Rin can be self-hosted using Docker
              without any external dependencies. In fact,{" "}
              <NextLink href="https://github.com/No767/Kumiko" passHref>
                <Link>Kumiko</Link>
              </NextLink>{" "}
              is designed to serve more features than Rin, including a economy
              system, a gacha system, and more.
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>

      <Box w="100%" pt={200}>
        <Hide below="md">
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} mx={50}>
            <VStack spacing={5} align="center" pt={25}>
              <Text fontSize="32px" fontWeight="semibold" align="center">
                Open Source and Free. Forever.
              </Text>
              <Text fontSize="20px" align="center">
                Rin is also completely free and open source, unlike popular
                Discord bots, which many if not all are closed source.
                Ultimately, you as the end user or developer, will be able to
                have access to these services for free. Rin will always stay
                free and open source.
              </Text>
            </VStack>
            <Image src="/undraw-assets/git.svg" width={512} height={512} />
          </SimpleGrid>
        </Hide>

        <Show below="md">
          <VStack spacing={5} align="center" mx={50}>
            <Image src="/undraw-assets/git.svg" width={512} height={512} />
            <VStack spacing={5} align="center" pt={25}>
              <Text fontSize="32px" fontWeight="semibold" align="center">
                Open Source and Free. Forever.
              </Text>
              <Text fontSize="20px" align="center">
                Rin is also completely free and open source, unlike popular
                Discord bots, which many if not all are closed source.
                Ultimately, you as the end user or developer, will be able to
                have access to these services for free. Rin will always stay
                free and open source.
              </Text>
            </VStack>
          </VStack>
        </Show>
      </Box>

      <Box w="100%" pt={100}>
        <VStack spacing={5} align="center">
          <Text fontSize="32px" fontWeight="semibold" align="center" mx={50}>
            Then what are your waiting for?
          </Text>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={10}>
            <Stat>
              <StatLabel>Total Commands Included</StatLabel>
              <StatNumber>75+</StatNumber>
              <StatHelpText>As of Rin v2.2.x</StatHelpText>
            </Stat>
            <NextLink
              href="https://top.gg/bot/865883525932253184/invite"
              passHref
            >
              <Button
                variant="outline"
                leftIcon={<SiDiscord />}
                borderColor="gray.500"
                size="lg"
              >
                Invite
              </Button>
            </NextLink>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
}
