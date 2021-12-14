import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import CreatorSection from "../components/sections/CreatorSection";
import ENEMSection from "../components/sections/ENEMSection";

import HeroSection from "../components/sections/HeroSection";
import IdiomsSection from "../components/sections/IdiomsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <IdiomsSection />
      <CreatorSection />
      <TestimonialSection />
      <ENEMSection />
    </Layout>
  );
}

export default IndexPage;
