import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getModuleList } from "../../shared/hooks/getData";
import NavBar from "../../shared/shared-components/navbar";
import CommandsBody from "../../shared/commands-components/body";
import GetModuleList from "../../shared/commands-components/get-module-list";

const CommandsIndex: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Rin - Commands"
        description="A Discord bot focused on obtaining data from third-party services with ease. 20 APIs integrated, 75+ commands, and a ton of new and cool features!"
        defaultTitle="Rin"
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: false,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        noindex={false}
        nofollow={false}
        canonical="https://rinbot.live"
      />
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
