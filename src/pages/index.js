import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import CreatorSection from "../components/sections/home/CreatorSection";
import ENEMSection from "../components/sections/home/ENEMSection";
import HeroSection from "../components/sections/home/HeroSection";
import IdiomsSection from "../components/sections/home/IdiomsSection";
import TestimonialSection from "../components/sections/home/TestimonialSection";
import SkillsSection from "../components/sections/home/SkillsSection";
function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <IdiomsSection />
      <CreatorSection />
      <TestimonialSection />
      <ENEMSection />
      <SkillsSection />
      {/* <FooterSection /> */}
    </Layout>
  );
}

export default IndexPage;
