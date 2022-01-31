import React from "react";
import styled from "styled-components";
import TechWaves from "../backgrounds/TechWaves";
import { H2, MediumText, Caption2 } from "../styles/TextStyles";

export default function TechSection() {
  return (
    <Wrapper>
      <TechWaves />
      <ContentWrapper>
        <TextWrapper>
          <SmallTitle>"A mágica acontece nos bastidores"</SmallTitle>
          <Title>Software Development</Title>
          <Description>
            Conheça as tecnologias que estou utilizando no momento!
          </Description>
        </TextWrapper>
        <IconsWrapper>
          <Icon src="/images/companies/java.svg" />
          <Icon src="/images/companies/python.svg" />
          <Icon src="/images/companies/cpp.svg" />
          <Icon src="/images/companies/swift.svg" />
          <Icon src="/images/companies/react.svg" />
        </IconsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  padding: 400px;
  display: grid;
  text-align: center;
  position: relative;
`;

const TextWrapper = styled.div`
  // TextWrapper is the text area
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  text-align: center;
  position: absolute;
  max-width: 460px;
  gap: 20px;
`;

const Title = styled(H2)`
  // This is a color variable calling ColorStyles
  color: white;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
  opacity: 0.7;
  color: white;
`;

const SmallTitle = styled(Caption2)`
  line-height: 50%;
  color: white;
`;

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px 250px;
  align-content: center;
  padding-top: 300px;
  place-items: center;
  position: absolute;
`;

const Icon = styled.img``;
