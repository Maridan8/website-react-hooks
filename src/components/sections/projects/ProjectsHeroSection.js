import React from "react";
import styled from "styled-components";
import { BodyIntro } from "../../styles/TextStyles";
import ProjectWaves from "../../backgrounds/ProjectWaves";

export default function ProjectsHeroSection() {
  return (
    <Wrapper>
      <ProjectWaves />
      <ContentWrapper>
        <CardsWrapper2>
          <Card2>
            <Icon src="/images/illustrations/iPhoneCard.png" width={"348"} />
          </Card2>
          <CardBottom2>
            <Subtitle>SwiftUI for iOS 15</Subtitle>
          </CardBottom2>
        </CardsWrapper2>
        <CardsWrapper>
          <Card>
            <Icon src="/images/illustrations/iPhoneCard.png" width={"348"} />
          </Card>
          <CardBottom>
            <Subtitle>SwiftUI for iOS 15</Subtitle>
          </CardBottom>
        </CardsWrapper>
        <CardsWrapper2>
          <Card2>
            <Icon src="/images/illustrations/iPhoneCard.png" width={"348"} />
          </Card2>
          <CardBottom2>
            <Subtitle>SwiftUI for iOS 15</Subtitle>
          </CardBottom2>
        </CardsWrapper2>
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
  padding-bottom: 250px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 450px) {
    transform: scale(0.8);
  }
`;

const CardsWrapper = styled.div`
  /* padding-top: 80px; */
  /* padding-bottom: 80px; */

  //centering
  display: flex;
  /* justify-content: center; */

  transform: scale(1.3);
  z-index: 5;
`;

const CardsWrapper2 = styled.div`
  /* padding-top: 80px; */
  padding-bottom: 80px;

  //centering
  display: flex;
  /* justify-content: center; */

  z-index: 2;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    z-index: 10;
    box-shadow: rgba(23, 0, 102, 0.5);
    transform: scale(1.1);
  }
`;

const Card = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 380px;
  height: 280px;

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
  width: 380px;
  height: 60px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 30px 30px;

  top: 220px;

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

const Card2 = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 380px;
  height: 280px;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 45.9087px 45.9087px rgba(69, 42, 124, 0.15);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  align-items: center;
  align-content: center;
`;

const CardBottom2 = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 380px;
  height: 60px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 30px 30px;

  top: 220px;

  //centering
  align-items: center;
  display: grid;
`;
