/** @format */

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomeBanner from "@site/src/components/HomeBanner";
import HomeFeatures from "@site/src/components/HomeFeatures";

function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description={siteConfig.tagline}
    >
      <main>
        <div>
          <HomeBanner />
        </div>
        <div>
          <HomeFeatures />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
