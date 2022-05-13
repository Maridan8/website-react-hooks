import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import WWDCHeroSection from "../components/sections/WWDCHeroSection";
import AppleContentSection from "../components/sections/AppleContentSection";
import TechSection from "../components/sections/TechSection";
import TextSection from "../components/sections/TextSection";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <WWDCHeroSection />
        <TextSection />

        {/* <AppleContentSection /> */}
      </Wrapper>

      {/* <WWDCHeroSection />

        <TechSection /> */}
    </Layout>
  );
}

export default AboutPage;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: black;
`;
