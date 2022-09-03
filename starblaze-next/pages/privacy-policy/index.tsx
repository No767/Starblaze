import type { NextPage } from "next";
import NavBar from "../../shared/shared-components/navbar";
import PrivacyPolicyBody from "../../shared/privacy-policy-components/body";

const PrivacyPolicyIndex: NextPage = () => {
  return (
    <div>
      <NavBar />
      <PrivacyPolicyBody />
    </div>
  );
};

export default PrivacyPolicyIndex;
