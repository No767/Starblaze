import React from "react";
import { VStack, Text } from "@chakra-ui/react";

export default function PrivacyPolicyBody() {
  return (
    <>
      <VStack align="center" spacing={15} pt={25} mx={50}>
        <Text fontSize="32px" fontWeight="semibold" align="center">
          Privacy Policy
        </Text>
        <Text fontSize="20px" align="center">
          Rin does not collect any data whatsoever. No IPs, no user data,
          nothing. Rin has no external dependencies, so there is no place to go
          ahead and store them to reliably.
        </Text>
      </VStack>
    </>
  );
}
