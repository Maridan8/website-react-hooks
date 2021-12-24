import React from "react";
import styled from "styled-components";
import PurchaseButton from "../buttons/PurchaseButton";

export default function SocialMediaSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <SocialMedia>
          <PurchaseButton title="INSTAGRAM" subtitle="@joaocarlos_mag" />
          <PurchaseButton title="TWITTER" subtitle="@joaocarlos.mag" />
          <PurchaseButton title="YOUTUBE" subtitle="@João Carlos Magalhães" />
          <PurchaseButton title="GITHUB" subtitle="@joaocarlos-mag" />
          <PurchaseButton title="TIKTOK" subtitle="@joaocarlos.mag" />
          <PurchaseButton title="LINKEDIN" subtitle="@João Carlos Magalhães" />
        </SocialMedia>
        <IPhone src="/images/illustrations/iPhone.svg" />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns: 800px 400px;
`;

const IPhone = styled.img`
  width: 340px;
  height: 591.61px;
  transform: rotate(7deg);
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
`;
