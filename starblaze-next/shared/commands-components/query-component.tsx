import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import NextLink from "next/link";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Show,
  Hide,
  Box,
  Flex,
  Container,
  Spacer,
  Center,
} from "@chakra-ui/react";

const queryClient = new QueryClient();

export default function QueryComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataMain />
    </QueryClientProvider>
  );
}

function Capitalize(str: string) {
  return str.replace(/(^|[\s-])\S/g, (match) => match.toUpperCase());
}

function DataMain() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    axios
      .get("https://api.rinbot.live/modules/all", options)
      .then(function (response) {
        return response.data;
      })
  );

  if (isLoading) return "Loading...";

  // @ts-ignore
  if (error) return error.message;

  return (
    <div>
      <Center>
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 7 }} spacing={10} pt={50}>
          <Button variant="outline" borderColor="gray.500" size="lg">
            All Commands
          </Button>
          {Object.keys(data.data).map((key) => (
            <NextLink href={`/commands/${data.data[key]}`} passHref>
              <Button variant="outline" borderColor="gray.500" size="lg" as="a">
                {Capitalize(data.data[key])}
              </Button>
            </NextLink>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}
