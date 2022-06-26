import React from "react";
import styled, { keyframes } from "styled-components";
import { BodyIntro } from "../../styles/TextStyles";
import ProjectWaves from "../../backgrounds/ProjectWaves";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";

export default function ProjectsHeroSection() {
  return (
    <Wrapper>
      <ProjectWaves />
      <TextWrapper>
        <Title>By innovation only.</Title>
      </TextWrapper>
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
            <Card2>
              <Icon src="/images/illustrations/iPhoneCard.png" width={"220"} />
            </Card2>
            <CardBottom2>
              <Subtitle>SwiftUI for iOS 15</Subtitle>
            </CardBottom2>
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

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  padding-right: 60px;
  padding-bottom: 500px;
  padding-left: 60px;
  display: flex;
  justify-content: center;
  justify-self: center;

  overflow: hidden;
  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 120px;
  }
`;

const MiddleWrapper = styled.div`
  //centering
  display: flex;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 120px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  z-index: 1;
  transform: scale(1.2);
`;

const CardsWrapper2 = styled.div`
  display: flex;
  z-index: 0;
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
  width: 280px;
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
  width: 280px;
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

const TextWrapper = styled.div`
  text-align: center;
  padding-top: 220px;
`;

const Title = styled(H1)`
  color: white;
  font-size: 40px;
`;
