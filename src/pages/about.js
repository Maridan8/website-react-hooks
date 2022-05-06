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
      <SEO title="About" />
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Ipad} type="video/mp4" />
      </video> */}
      <AppleContentSection />
      {/* <WWDCHeroSection />

        <TechSection /> */}
    </Layout>
  );
}

export default AboutPage;

const Wrapper = styled.div`
  overflow: hidden;
`;
