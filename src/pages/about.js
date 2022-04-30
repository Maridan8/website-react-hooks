import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import WWDCHeroSection from "../components/sections/WWDCHeroSection";
import AppleContentSection from "../components/sections/AppleContentSection";
import TechSection from "../components/sections/TechSection";

function AboutPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <WWDCHeroSection />
        <AppleContentSection />
        <TechSection />
      </Wrapper>
    </Layout>
  );
}

export default AboutPage;

const Wrapper = styled.div`
  overflow: hidden;
`;
