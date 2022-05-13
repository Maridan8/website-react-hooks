import React from "react";
import styled from "styled-components";
import { H1 } from "../styles/TextStyles";

export default function AppleContentSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/illustrations/iPadAir.jpeg"
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            // top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
          }}
        >
          <source src="/videos/iPad2.mp4" type="video/mp4" />
        </video>
        <TextWrapper>
          <Title>Think Different.</Title>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  /* Full height */
  /* Center and scale the image nicely */
  max-width: 1234px;
  margin: 0 auto;
  padding-top: 350px;
  padding-right: 30px;
  padding-bottom: 200px;
  padding-left: 30px;
  display: flex;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  /* max-width: 1234px;*/
  margin: 0 auto;

  /* padding-top: 240px; */
  /* padding-right: 30px;
  height: 100%;
  padding-left: 30px;
  display: flex;
  overflow: hidden;
  align-items: center;
  align-self: center; */
`;

const TextWrapper = styled.div`
  align-self: center;
  text-align: center;
  align-items: center;
  display: grid;
`;

const Title = styled(H1)`
  text-align: center;
  color: white;
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;
