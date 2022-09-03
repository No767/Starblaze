import type { NextPage } from "next";
import NavBar from "../shared/shared-components/navbar";
import IndexShowcase from "../shared/index-components/showcase";
import IndexBody from "../shared/index-components/body";
import Footer from "../shared/shared-components/footer";

const Index: NextPage = () => {
  return (
    <div>
      <NavBar />
      <IndexShowcase />
      <IndexBody />
      <Footer />
    </div>
  );
};

export default Index;
