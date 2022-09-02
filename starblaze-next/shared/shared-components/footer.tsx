import React from "react";
import { VStack, HStack, Text, Link } from "@chakra-ui/react";
import { SiChakraui, SiVercel, SiNextdotjs } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <VStack pt={100}>
        <Text>Built with and powered by</Text>
        <HStack spacing={15}>
          <Link
            href="https://nextjs.org/"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <SiNextdotjs size={24} />
          </Link>
          <Link
            href="https://chakra-ui.com/"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <SiChakraui size={24} />
          </Link>
          <Link
            href="https://vercel.com/"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <SiVercel size={24} />
          </Link>
        </HStack>
        <Text pt={5} pb={5} align="center">
          © 2022 - Site Licensed under GPL-3.0
        </Text>
      </VStack>
    </>
  );
}
