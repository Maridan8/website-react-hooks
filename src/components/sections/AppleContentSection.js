import React from "react";
import styled from "styled-components";
import { BodyMain, H2 } from "../styles/TextStyles";

export default function AppleContentSection() {
  return (
    <Wrapper>
      {/* <Macbook src="/images/illustrations/macbook.png" /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title2>WWDC22</Title2>
          <Body>
            Join developers worldwide from June 6 to 10 for an inspiring week of
            technology and community. Get a first look at Apple’s latest
            platforms and technologies in sessions, explore the newest tools and
            tips, and connect with Apple experts in labs and digital lounges.
            All online and at no cost.
          </Body>
          <Body>
            In addition to the online conference, Apple will host a special day
            for developers and students at Apple Park on June 6 to watch the
            keynote and State of the Union videos together, along with the
            online community. Space is limited and details on how to apply to
            attend will be provided soon.
          </Body>
          <Title2>WWDC22</Title2>
          <Body>
            Join developers worldwide from June 6 to 10 for an inspiring week of
            technology and community. Get a first look at Apple’s latest
            platforms and technologies in sessions, explore the newest tools and
            tips, and connect with Apple experts in labs and digital lounges.
            All online and at no cost.
          </Body>
          <Body>
            In addition to the online conference, Apple will host a special day
            for developers and students at Apple Park on June 6 to watch the
            keynote and State of the Union videos together, along with the
            online community. Space is limited and details on how to apply to
            attend will be provided soon.
          </Body>
        </TextWrapper>
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
  padding-top: 40px;
  padding-right: 30px;
  padding-bottom: 120px;
  padding-left: 30px;
  display: grid;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
`;

const Title2 = styled(H2)`
  padding-top: 30px;
  padding-bottom: 10px;
  color: black;
`;

const Body = styled(BodyMain)`
  color: black;
`;
