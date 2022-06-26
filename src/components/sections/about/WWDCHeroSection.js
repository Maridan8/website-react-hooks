import React from "react";
import styled from "styled-components";
import { H1 } from "../../styles/TextStyles";

export default function WWDCHeroSection() {
  return (
    <Wrapper>
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
  background-image: url("/images/illustrations/wwdc/bg-wwdc.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1234px;
  padding-top: 240px;
  padding-right: 30px;
  margin-bottom: 450px;
  padding-left: 30px;
  display: flex;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  align-self: center;
  text-align: center;
`;

const Title = styled(H1)`
  color: white;
  font-size: 55px;
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
`;
