import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
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
} from "@chakra-ui/react";

const queryClient = new QueryClient();

export default function QueryComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataMain />
    </QueryClientProvider>
  );
}

function giveBackData(endpoint: string) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    axios
      .get(`https://api.rinbot.live/commands/${endpoint}`, options)
      .then(function (response) {
        return response.data;
      })
  );

  if (isLoading) return "Loading...";
  // @ts-ignore
  else if (error) return error.message;
  else return data;
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
      <Tabs mx={100} pt={50}>
        <TabList>
          <Tab>All Commands</Tab>
          {Object.keys(data.data).map((key) => (
            <Tab>{data.data[key]}</Tab>
          ))}
        </TabList>

        {/* <TabPanels>
          <TabPanel>
            {Object.keys(data.data).map((key) => (
              <VStack spacing={15} pt={25}>
                <Container borderWidth="1px" borderRadius="lg" maxW="100%">
                  <Text>{data.data[key].name}</Text>
                  <Text pt={5}>{data.data[key].description}</Text>
                  <Text pt={5}>{data.data[key].module}</Text>
                </Container>
              </VStack>
            ))}
          </TabPanel>
        </TabPanels> */}
      </Tabs>
    </div>
  );
}
