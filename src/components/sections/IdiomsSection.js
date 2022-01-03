import React from "react";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

import styled from "styled-components";
import Idioms from "../buttons/IdiomsButton";
import LearnMoreButton from "../buttons/LearnMoreButton";

function IdiomsSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <SmallTitle>Idiomas</SmallTitle>
          <Title>Hello | Hola | Salut</Title>
          <Description>
            Conheça a minha opinião sobre línguas estrangeiras e embarque nesse
            meu hobby!
          </Description>
          <LearnMoreButton />
        </TextWrapper>
        <Idioms subtitle="English" src="/images/icons/english.svg" />
        <Idioms subtitle="Español" src="/images/icons/español.svg" />
        <Idioms subtitle="Français" src="/images/icons/français.svg" />
      </ContentWrapper>
    </Wrapper>
  );
}

export default IdiomsSection;

const Wrapper = styled.div`
  align-items: center;
  overflow: hidden;
  padding-bottom: 50px;

  // Wrapper is the background
`;
const ContentWrapper = styled.div`
  // ContentWrapper is the content area
  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding: 50px 50px 30px 30px; //200px top and bottom; 30px right and left
  display: grid;
  grid-template-columns: 650px 150px 150px 150px;
  align-items: center;
  align-content: center;

  /* @media (max-width: 800px) {
    // Adaptive Layout
    grid-template-columns: 1fr;
    gap: 100px;
    margin: 0 auto;
    align-items: center;
  } */

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const TextWrapper = styled.div`
  // TextWrapper is the text area
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H2)`
  // This is a color variable calling ColorStyles
  color: linear-gradient(180deg, #730040 0%, #301cbe 100%); ;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
  opacity: 0.7;
`;
const SmallTitle = styled(Caption2)`
  line-height: 50%;
`;
