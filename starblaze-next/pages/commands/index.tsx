import type { NextPage } from "next";
import NavBar from "../../shared/shared-components/navbar";
import CommandsBody from "../../shared/commands-components/body";
import QueryComponent from "../../shared/commands-components/query-component";

// import IndexShowcase from "../../shared/index-components/showcase";
// import IndexBody from "../../shared/index-components/body";
// import Footer from "../../shared/shared-components/footer";
// import { dehydrate, QueryClient } from "@tanstack/react-query";
// import ky from "ky-universal";

const CommandsIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <CommandsBody />
      <QueryComponent />
    </div>
  );
};

export default CommandsIndex;
