import React from "react";
import styled from "styled-components";
import FooterWaves from "../backgrounds/FooterWaves";

export default function FooterSection() {
  return (
    <Wrapper>
      <FooterWaves />
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;
