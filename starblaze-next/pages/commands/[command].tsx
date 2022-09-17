import type { NextPage } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getDataModules } from "../../shared/hooks/getData";
import NavBar from "../../shared/shared-components/navbar";
import GetModuleCommands from "../../shared/commands-components/get-module-commands-component";

const ModuleCommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <GetModuleCommands />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/commands/anilist"],
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const queryClient = new QueryClient();
  const command = context.params.command;
  await queryClient.prefetchQuery(["allModuleData"], () =>
    getDataModules(command)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default ModuleCommandsIndex;
