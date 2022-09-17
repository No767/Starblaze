import React from "react";
import NextLink from "next/link";
import { useModuleListData } from "../hooks/getData";
import { Capitalize } from "../utils/capitalize";
import { Button, Text, SimpleGrid, Center, VStack } from "@chakra-ui/react";

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
      <VStack pt={35}>
        <NextLink href="/commands/all" passHref>
          <Button variant="outline" borderColor="gray.500" size="lg" as="a">
            All Commands
          </Button>
        </NextLink>
      </VStack>
      <Center>
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 7 }} spacing={10} pt={50}>
          {Object.keys(data.data).map((indexKeyMain) => (
            <NextLink href={`/commands/${data.data[indexKeyMain]}`} passHref>
              <Button variant="outline" borderColor="gray.500" size="lg" as="a">
                {Capitalize(data.data[indexKeyMain])}
              </Button>
            </NextLink>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}
