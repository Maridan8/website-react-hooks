import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import TechSection from "../components/sections/TechSection";
import CreatorSection from "../components/sections/home/CreatorSection";
import ENEMSection from "../components/sections/home/ENEMSection";
import styled from "styled-components";
import HeroSection from "../components/sections/home/HeroSection";
import IdiomsSection from "../components/sections/home/IdiomsSection";
import TestimonialSection from "../components/sections/home/TestimonialSection";
import FooterSection from "../components/sections/FooterSection";
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
