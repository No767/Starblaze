import React from "react";
import NextLink from "next/link";
import { useModuleListData } from "../hooks/getData";
import { Button, Text, SimpleGrid, Center } from "@chakra-ui/react";

function Capitalize(str: string) {
  return str.replace(/(^|[\s-])\S/g, (match) => match.toUpperCase());
}

export default function GetModuleList() {
  const { data, isLoading } = useModuleListData();

  if (isLoading)
    return (
      <div>
        <Text align="center" fontSize="xl">
          Loading...
        </Text>
      </div>
    );

  return (
    <div>
      <Center>
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 7 }} spacing={10} pt={50}>
          <NextLink href="/commands/all" passHref>
            <Button variant="outline" borderColor="gray.500" size="lg" as="a">
              All Commands
            </Button>
          </NextLink>

          {Object.keys(data.data).map((keyMain) => (
            <NextLink href={`/commands/${data.data[keyMain]}`} passHref>
              <Button variant="outline" borderColor="gray.500" size="lg" as="a">
                {Capitalize(data.data[keyMain])}
              </Button>
            </NextLink>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}
