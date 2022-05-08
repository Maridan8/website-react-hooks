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
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src="/videos/iPad.mp4" type="video/mp4" />
        </video>
        <TextWrapper>
          <Title>Think Different.</Title>
          <Title>Think Different.</Title>
          <Title>Think Different.</Title>
          <Title>Think Different.</Title>
          <Title>Think Different.</Title>
          <Title>Think Different.</Title>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  /* Full height */

  /* Center and scale the image nicely */
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding-top: 240px;
  padding-right: 30px;
  height: 100%;
  padding-left: 30px;
  display: flex;
  overflow: hidden;
  align-items: center;
  align-self: center;
`;

const TextWrapper = styled.div`
  align-self: center;
  text-align: center;
  align-items: center;
  display: grid;
  gap: 100px;
`;

const Title = styled(H1)`
  text-align: center;
  color: white;
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
`;
