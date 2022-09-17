import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import NavBar from "../../shared/shared-components/navbar";
import PrivacyPolicyBody from "../../shared/privacy-policy-components/body";

const PrivacyPolicyIndex: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Rin - Privacy Policy"
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
      <PrivacyPolicyBody />
    </div>
  );
};

export default PrivacyPolicyIndex;
