import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import AppleHeroSection from "../components/sections/AppleHeroSection";
import AppleContentSection from "../components/sections/AppleContentSection";
import TechSection from "../components/sections/TechSection";

function AboutPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <AppleHeroSection />
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
