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
import FooterSection from "../components/sections/FooterSection";
function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <IdiomsSection />
      <CreatorSection />
      <TestimonialSection />
      <ENEMSection />
      <picture>
        <source
          srcset="/images/illustrations/skills-pack-mobile.png"
          media="(max-width: 700px)"
        />
        <source srcset="/images/illustrations/skills-pack.png" />
        <img
          src="/images/illustrations/skills-pack.png"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </picture>
      {/* <FooterSection /> */}
    </Layout>
  );
}

export default IndexPage;
