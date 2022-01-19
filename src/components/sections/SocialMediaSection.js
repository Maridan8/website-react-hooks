import React from "react";
import styled from "styled-components";
import PurchaseButton from "../buttons/PurchaseButton";

export default function SocialMediaSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <SocialMedia>
          <PurchaseButton
            url="https://www.instagram.com/joaocarlos_mag/"
            title="INSTAGRAM"
            subtitle="@joaocarlos_mag"
          />
          <PurchaseButton
            url="https://twitter.com/joaocarlos_mag"
            title="TWITTER"
            subtitle="@joaocarlos.mag"
          />
          <PurchaseButton
            url="https://www.youtube.com/c/JoãoCarlosMagalhães/featured"
            title="YOUTUBE"
            subtitle="@João Carlos Magalhães"
          />
          <PurchaseButton
            url="https://github.com/joaocarlos-mag"
            title="GITHUB"
            subtitle="@joaocarlos-mag"
          />
          <PurchaseButton
            url="https://vm.tiktok.com/ZMLdMuPB4/"
            title="TIKTOK"
            subtitle="@joaocarlos.mag"
          />
          <PurchaseButton
            url="https://www.linkedin.com/in/joão-carlos-magalhães-a0b068218/"
            title="LINKEDIN"
            subtitle="@João Carlos Magalhães"
          />
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
