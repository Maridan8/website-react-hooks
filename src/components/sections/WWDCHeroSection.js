import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1 } from "../styles/TextStyles";

export default function WWDCHeroSection() {
  return (
    <Wrapper>
      <WWDC />
      <ContentWrapper>
        <TextWrapper>
          <Title>Write code, glow minds.</Title>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url("/images/illustrations/bg-wwdc.png");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

const WWDC = styled.div`
  background: url("/images/illustrations/wwdc.png") no-repeat;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding-top: 240px;
  padding-right: 30px;
  padding-bottom: 400px;
  padding-left: 30px;
  display: flex;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  align-self: center;
  text-align: center;
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
`;
