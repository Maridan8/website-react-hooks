import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

import HeroSection from "../components/sections/HeroSection";
import IdiomsSection from "../components/sections/IdiomsSection";
function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <IdiomsSection />
    </Layout>
  );
}

export default IndexPage;
