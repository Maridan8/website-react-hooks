import React from "react";
import styled from "styled-components";
import FooterWaves from "../backgrounds/FooterWaves";
import Header from "../layout/Header";
import { H1, H2, BodyMain } from "../styles/TextStyles";

export default function FooterSection() {
  return (
    <Wrapper>
      <FooterWaves />
      <ContentWrapper>
        <Header />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  /* padding-top: 50px; */
  padding-bottom: 30px;
  padding-right: 30px;
  height: 100%;
  padding-left: 30px;
  display: grid;
  overflow: hidden;
`;

// const TextWrapper = styled.div`
//   display: grid;
//   gap: 20px;
// `;

// const Title = styled(H2)`
//   color: white;
//   line-height: 70px;
//   text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
// `;

// const Slogan = styled(H1)`
//   color: white;
//   line-height: 70px;
//   text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
// `;

// const Text = styled(BodyMain)`
//   font-size: 19px;
//   color: white;
//   text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
// `;

// const ImageContainer = styled.img`
//   padding-top: 30px;
//   width: 100%;
//   height: auto;
// `;

// const VideoWrapper = styled.div`
//   margin: 0 auto;

//   display: flex;
//   overflow: hidden;
// `;

// const SloganWrapper = styled.div`
//   /* margin: 0 auto;
//   align-self: center;
//   text-align: center;
//   z-index: 3;
//   position: absolute;
//   background-color: red; */
//   margin: 0 auto;
//   align-self: center;
//   text-align: center;
//   position: absolute;
//   justify-content: center;
//   padding-right: 30px;
//   padding-left: 30px;
//   width: 100%;
// `;
