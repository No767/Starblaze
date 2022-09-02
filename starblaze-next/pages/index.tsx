import type { NextPage } from "next";
import NavBar from "../shared/shared-components/navbar";
import IndexShowcase from "../shared/index-components/showcase";
import Footer from "../shared/shared-components/footer";
const Index: NextPage = () => {
  return (
    <div>
      <NavBar />
      <IndexShowcase />
      <Footer />
    </div>
  );
};

export default Index;
