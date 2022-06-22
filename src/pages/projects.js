import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import ProjectsHeroSection from "../components/sections/projects/ProjectsHeroSection";

function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <ProjectsHeroSection />
      </Wrapper>
    </Layout>
  );
}

export default ProjectsPage;

const Wrapper = styled.div`
  overflow: hidden;
`;
