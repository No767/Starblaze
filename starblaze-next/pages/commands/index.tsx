import type { NextPage } from "next";
import NavBar from "../../shared/shared-components/navbar";
import QueryComponent from "../../shared/commands-components/query-component";

import IndexShowcase from "../../shared/index-components/showcase";
import IndexBody from "../../shared/index-components/body";
import Footer from "../../shared/shared-components/footer";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetCommands } from "../../hooks/index";
import ky from "ky-universal";

const CommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <QueryComponent />
    </div>
  );
};

//   export async function getStaticProps() {
//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery(['posts', 10])

//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//     }
//   }
export default CommandsIndex;
