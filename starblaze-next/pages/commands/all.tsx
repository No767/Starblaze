import type { NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getData } from "../../shared/hooks/getData";
import NavBar from "../../shared/shared-components/navbar";
import GetAllCommands from "../../shared/commands-components/get-all-commands-component";

const AllCommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <GetAllCommands />
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["allRepoData"], () => getData());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default AllCommandsIndex;
