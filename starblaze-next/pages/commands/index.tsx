import type { NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getModuleList } from "../../shared/hooks/getData";
import NavBar from "../../shared/shared-components/navbar";
import CommandsBody from "../../shared/commands-components/body";
import GetModuleList from "../../shared/commands-components/get-module-list";

const CommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <CommandsBody />
      <GetModuleList />
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["moduleListData"], () => getModuleList());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default CommandsIndex;
