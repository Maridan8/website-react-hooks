import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText } from "../styles/TextStyles";

export default function AppleHeroSection() {
  return (
    <Wrapper>
      {/* <Wave
        src="/images/waves/wwdc-wave.svg"
        style={{ top: "300px", filter: "blur(60px)" }}
      /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Criador, <br />
            estudante <span> &amp; </span>
            desenvolvedor
          </Title>
          <Description>
            Eu sou João Carlos Magalhães, um <br />
            estudante de 16 anos morando no Brasil.
          </Description>
          {/* <PurchaseButton title="UPDATES" subtitle="Últimas notícias" /> */}
        </TextWrapper>
        <AlphaWrapper>
          <Alpha>Hello</Alpha>
        </AlphaWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url("/images/illustrations/bg-apple.png");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding-top: 240px;
  padding-right: 30px;
  padding-bottom: 400px;
  padding-left: 30px;
  display: grid;
  grid-template-columns: 1024px auto;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const AlphaWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

const Alpha = styled(H1)`
  opacity: 0;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`;
