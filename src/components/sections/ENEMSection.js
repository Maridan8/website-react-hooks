import React from "react";
import styled, { keyframes } from "styled-components";
import { ENEMWaves } from "../backgrounds/ENEMWaves";

export default function ENEMSection() {
  return (
    <Wrapper>
      <ENEMWaves />
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  // ContentWrapper is the content area
  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding-top: 180px;
  padding-right: 30px;
  padding-bottom: 500px;
  padding-left: 30px;
  display: grid;
  grid-template-columns: 450px 400px 400px;
  align-items: center;
  align-content: center;
`;
