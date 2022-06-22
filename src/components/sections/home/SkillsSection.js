import React from "react";
import styled from "styled-components";

export default function SkillsSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <picture>
          <source
            srcset="/images/illustrations/skills-pack-mobile.png"
            media="(max-width: 700px)"
          />
          <source srcset="/images/illustrations/skills-pack.png" />
          <img
            src="/images/illustrations/skills-pack.png"
            alt="Skills"
            style={{
              paddingTop: "30px",

              width: "100%",
              height: "auto",
            }}
          />
        </picture>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  /* padding-top: 50px; */
  padding-bottom: 30px;
  padding-right: 30px;
  height: 100%;
  padding-left: 30px;
  display: grid;
  overflow: hidden;
`;
