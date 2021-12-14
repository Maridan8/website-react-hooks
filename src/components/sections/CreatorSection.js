import React from "react";
import styled, { keyframes } from "styled-components";
import { CreatorWaves } from "../backgrounds/CreatorWaves";
import HandBook from "../buttons/Handbook";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

export default function CreatorSection() {
  return (
    <Wrapper>
      <CreatorWaves />
      <ContentWrapper>
        <TextWrapper>
          <SmallTitle>AUDIOVISUAL</SmallTitle>
          <Title>
            Luz, câmera <br />
            ação!
          </Title>
          <Description>
            Conheça o meu trabalho como criador de conteúdo e enriqueça o seu
            conhecimento!
          </Description>
        </TextWrapper>
        <HandBook
          src="/images/icons/handbookRed.svg"
          title="Como ser estudioso"
          subtitle="Conheça a maneira que eu utilizo para estudar melhor"
          pdf="Guia do estudo perfeito"
        />
        <HandBook
          src="/images/icons/handbookBlue.svg"
          title="Técnicas de programação"
          subtitle="Dicas para iniciantes em programação"
          pdf="Aprendendo a pensar"
        />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  overflow: hidden;
  padding-top: 50px;
  // Wrapper is the background
`;

const ContentWrapper = styled.div`
  // ContentWrapper is the content area
  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding-top: 250px;
  padding-right: 30px;
  padding-bottom: 100px;
  padding-left: 30px;
  display: grid;
  grid-template-columns: 450px 400px 100px;
  align-items: center;
  align-content: center;
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

const SmallTitle = styled(Caption2)`
  line-height: 30%;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
  opacity: 0.7;
`;
