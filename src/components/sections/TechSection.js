import React from "react";
import styled from "styled-components";
import TechWaves from "../backgrounds/TechWaves";
import { H1 } from "../styles/TextStyles";
import LearnMoreButton from "../buttons/LearnMoreButton";
// import ReactPlayer from "react-player";
import { Caption2, H2, MediumText } from "../styles/TextStyles";

export default function TechSection() {
  return (
    <Wrapper>
      <TechWaves />
      <ContentWrapper>
        <TextContainer>
          <TextWrapper>
            <SmallTitle>"A MÁGICA ACONTECE NOS BASTIDORES"</SmallTitle>
            <Title>Software Development</Title>
            <Description>
              Conheça as tecnologias que estou utilizando no momento!
            </Description>
          </TextWrapper>
        </TextContainer>
        <ToolsWrapper>
          <Tools src="/images/tools/java.svg" />
          <Tools src="/images/tools/python.svg" />
          <Tools src="/images/tools/cpp.svg" />
          <Tools src="/images/tools/swift.svg" />
          <Tools src="/images/tools/react.svg" />
        </ToolsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 0px;
  padding-bottom: 0px;
`;
const TextContainer = styled.div`
  display: flex;
  display: flex;
  padding-top: 300px;
  padding-bottom: 100px;
`;
const TextWrapper = styled.div`
  margin: 0 auto;
  align-self: center;
  text-align: center;
  display: grid;
  gap: 20px;
`;
const ToolsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled(H1)`
  color: white;
  text-align: center;
`;
const SmallTitle = styled(Caption2)`
  line-height: 50%;
`;

const Description = styled(MediumText)`
  font-size: 18px;
  color: white;
`;
const Tools = styled.img`
  width: 66px;
  height: 66px;
`;
