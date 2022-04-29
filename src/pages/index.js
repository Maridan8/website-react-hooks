import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import TechSection from "../components/sections/TechSection";
import CreatorSection from "../components/sections/CreatorSection";
import ENEMSection from "../components/sections/ENEMSection";
import styled from "styled-components";
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
      <Skills />
      <TechSection />
    </Layout>
  );
}

export default IndexPage;

const Skills = styled.div`
  height: 590px;
  background-size: cover;

  /* width: 100%;
  height: 590px; */

  background-image: url("/images/illustrations/skills-pack.png");
  background-size: cover;

  margin-bottom: 150px;

  @media only screen and (max-width: 600px) {
    background-image: url("/images/illustrations/skills-pack-mobile.png");
    background-size: cover;
    height: 680px;
  }
`;
