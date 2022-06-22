import React from "react";
import styled from "styled-components";
import { BodyIntro } from "../../styles/TextStyles";
import ProjectWaves from "../../backgrounds/ProjectWaves";

export default function ProjectsHeroSection() {
  return (
    <Wrapper>
      <ProjectWaves />
      <ContentWrapper>
        <CardsWrapper>
          <Card>
            <Icon src="/images/illustrations/iPhoneCard.png" width={"348"} />
          </Card>
          <CardBottom>
            <Subtitle>SwiftUI for iOS 15</Subtitle>
          </CardBottom>
        </CardsWrapper>
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
  padding-top: 220px;
  padding-right: 30px;
  padding-bottom: 220px;
  padding-left: 30px;
  display: grid;
`;

const CardsWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;

  //centering
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 440px;
  height: 330px;

  background: rgba(181, 249, 253, 0.42);
  box-shadow: 0px 45.9087px 45.9087px rgba(69, 42, 124, 0.15);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  align-items: center;
  align-content: center;
`;

const CardBottom = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 440px;
  height: 60px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 30px 30px;

  top: 269px;

  //centering
  align-items: center;
  display: grid;
`;

const Subtitle = styled(BodyIntro)`
  color: white;
  font-size: 16px;
  font-weight: 600;

  text-align: center;
`;

const Icon = styled.img`
  align-self: center;
  display: block;
  padding-top: 15px;
  margin-left: auto;
  margin-right: auto;
`;
