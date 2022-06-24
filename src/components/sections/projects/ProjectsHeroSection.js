import React from "react";
import styled from "styled-components";
import { BodyIntro } from "../../styles/TextStyles";
import ProjectWaves from "../../backgrounds/ProjectWaves";

export default function ProjectsHeroSection() {
  return (
    <Wrapper>
      <ProjectWaves />
      <ContentWrapper>
        <MiddleWrapper>
          <CardsWrapper2>
            <Card2>
              <Icon src="/images/illustrations/macStudio.png" width={"200"} />
            </Card2>
            <CardBottom2>
              <Subtitle>React Hooks</Subtitle>
            </CardBottom2>
          </CardsWrapper2>
          <CardsWrapper>
            <Card>
              <Icon src="/images/illustrations/iPhoneCard.png" width={"280"} />
            </Card>
            <CardBottom>
              <Subtitle>SwiftUI for iOS 15</Subtitle>
            </CardBottom>
          </CardsWrapper>
          <CardsWrapper2>
            <Card2>
              <Icon src="/images/illustrations/gear.png" width={"200"} />
            </Card2>
            <CardBottom2>
              <Subtitle>Leetcode</Subtitle>
            </CardBottom2>
          </CardsWrapper2>
        </MiddleWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding-top: 220px;
  padding-right: 60px;
  padding-bottom: 250px;
  padding-left: 60px;
  display: flex;
  justify-content: center;

  overflow: hidden;

  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 120px;
  }
`;

const MiddleWrapper = styled.div`
  max-width: 800px;

  //centering
  display: flex;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 120px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const CardsWrapper2 = styled.div`
  display: flex;
`;

const Card = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 360px;
  height: 265px;

  background: rgba(151, 249, 255, 0.35);
  box-shadow: 0px 45.9087px 45.9087px rgba(69, 42, 124, 0.15);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  align-items: center;
  align-content: center;

  //above
  z-index: 1;
`;

const Card2 = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 300px;
  height: 221px;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 45.9087px 45.9087px rgba(69, 42, 124, 0.15);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  align-items: center;
  align-content: center;
  z-index: 0;
`;

const CardBottom = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 360px;
  height: 50px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 30px 30px;

  top: 215px;

  //centering
  align-items: center;
  display: grid;

  z-index: 1;
`;

const CardBottom2 = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 300px;
  height: 45px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 30px 30px;

  top: 176px;

  //centering
  align-items: center;
  display: grid;

  @media (max-width: 900px) {
    z-index: -2;
  }
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
