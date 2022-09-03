import type { NextPage } from "next";
import NavBar from "../../shared/shared-components/navbar";
import TOSBody from "../../shared/tos-components/body";

const TOSIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <TOSBody />
    </div>
  );
};

export default TOSIndex;
