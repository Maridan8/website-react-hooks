import React from "react";
import styled, { keyframes } from "styled-components";
import MockupAnimation from "../animations/MockupAnimation";
import WaveBackground from "../backgrounds/WaveBackground";
import PurchaseButton from "../buttons/PurchaseButton";
import { themes } from "../styles/ColorStyles";
import { H1, MediumText } from "../styles/TextStyles";

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
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
          <PurchaseButton title="UPDATES" subtitle="Últimas notícias" />
        </TextWrapper>
        <MockupWrapper>
          <MockupAnimation />
        </MockupWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding-top: 220px;
  padding-right: 30px;
  padding-bottom: 270px;
  padding-left: 60px;
  display: grid;
  grid-template-columns: 530px auto;

  @media (max-width: 500px) {
    // Adaptive Layout
    grid-template-columns: 1fr;
    gap: 100px;
    margin: 0 auto;
  }
`;

const TextWrapper = styled.div`
  max-width: 460px;
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
    font-size: 48px;
  }
`;

const Description = styled(MediumText)``;

const MockupWrapper = styled.div`
  min-height: 300px;
  max-width: 570px;
  display: grid;
  gap: 30px;
  position: relative;
`;
