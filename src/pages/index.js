import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import TechSection from "../components/sections/TechSection";
import CreatorSection from "../components/sections/CreatorSection";
import ENEMSection from "../components/sections/ENEMSection";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";
import IdiomsSection from "../components/sections/IdiomsSection";
import SocialMediaSection from "../components/sections/SocialMediaSection";
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
      <Skills />
      <TechSection />
      {/* <SocialMediaSection /> */}
    </Layout>
  );
}

export default IndexPage;

const Skills = styled.div`
  /* width: 1300px;
  height: 731.25px;
  background-size: cover; */
  width: 100%;
  height: 590px;
  background-image: url("/images/illustrations/skills-pack.png");
  background-size: cover;
  margin-bottom: 150px;
`;
