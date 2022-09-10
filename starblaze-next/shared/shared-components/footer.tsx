import React from "react";
import NextLink from "next/link";
import { VStack, HStack, Text, Link, SimpleGrid } from "@chakra-ui/react";
import { SiVercel, SiNextdotjs, SiFastapi } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <VStack pt={100} align="center">
        <Text px={50}>Built with and powered by</Text>
        <HStack spacing={15}>
          <Link
            href="https://nextjs.org/"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <SiNextdotjs size={24} />
          </Link>
          <Link
            href="https://fastapi.tiangolo.com/"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <SiFastapi size={24} />
          </Link>
          <Link
            href="https://vercel.com/"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <SiVercel size={24} />
          </Link>
        </HStack>
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={5} pt={25}>
          <NextLink href="/terms-of-service" passHref>
            <Link>Terms Of Service</Link>
          </NextLink>
          <NextLink href="/privacy-policy" passHref>
            <Link>Privacy Policy</Link>
          </NextLink>
        </SimpleGrid>
        <Text pt={5} pb={5} align="center" px={50}>
          © 2022 - Licensed under GPL-3.0
        </Text>
      </VStack>
    </>
  );
}
