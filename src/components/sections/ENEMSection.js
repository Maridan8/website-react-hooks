import React from "react";
import styled from "styled-components";
import { ENEMWaves } from "../backgrounds/ENEMWaves";
import ENEMCards from "../buttons/ENEMCards";
import LearnMoreButton from "../buttons/LearnMoreButton";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

export default function ENEMSection() {
  return (
    <Wrapper>
      <ENEMWaves />
      <ContentWrapper>
        <TextWrapper>
          <SmallTitle>EVENTO AO VIVO</SmallTitle>
          <Title>
            Aulão | Edição <br />
            ENEM 2O21
          </Title>
          <Description>
            A maior revisão de todas as disciplinas proporcionou uma experiência
            única aos estudantes de todo o Brasil.
          </Description>
          <LearnMoreButton />
        </TextWrapper>
        <CardsWrapper>
          <ENEMCards />
          <ENEMCards />
          <ENEMCards />
          <ENEMCards />
          <ENEMCards />
        </CardsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 200px;
  // Wrapper is the background
`;

const ContentWrapper = styled.div`
  // ContentWrapper is the content area
  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding-top: 120px;
  padding-right: 30px;
  padding-bottom: 70px;
  padding-left: 30px;

  gap: 30px;
`;

const TextWrapper = styled.div`
  // TextWrapper is the text area
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H2)`
  // This is a color variable calling ColorStyles
  color: white;
`;

const SmallTitle = styled(Caption2)`
  line-height: 30%;
  color: white;
  opacity: 0.7;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
  opacity: 0.7;
  color: white;
`;

const CardsWrapper = styled.div`
  padding-top: 0px;
  padding-right: 30px;
  display: grid;
  grid-template-columns: 240px 240px 240px 240px 240px;
`;
