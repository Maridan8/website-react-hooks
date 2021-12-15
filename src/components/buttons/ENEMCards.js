import React from "react";
import styled from "styled-components";
import { Caption, Caption2, H3, SmallText2 } from "../styles/TextStyles";

export default function ENEMCards(props) {
  const { src, title, subtitle, pdf } = props;
  return (
    <Wrapper>
      {/* <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "15%" }} />
        <Handbook src={src || "/images/icons/handbookRed.svg"} /> */}
      <TextWrapper>
        <Illustration src="images/illustrations/illustration1.svg" />
        <Title>{title || "Linguagens"}</Title>
        <Subtitle>{subtitle || "5 vídeos - 3 horas"}</Subtitle>
        <PlayWrapper>
          <Play src="images/icons/play.svg" />
        </PlayWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* Card */

  width: 210px;
  height: 330px;
  margin-top: 50px;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  /* Gradient 5 */

  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 20px 40px rgba(251, 94, 84, 0.3));
  background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
  border-radius: 20px;
`;

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 15px;
  top: 30px;
  max-width: 250px;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
`;

const Title = styled(H3)`
  color: white;
`;

const Subtitle = styled(Caption)`
  color: white;
  opacity: 70%;
`;

const PlayWrapper = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  width: 40px;
  height: 40px;
  border-radius: 50px;
  left: 75px;
`;

const Play = styled.img`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35px;
  height: 35px;
  opacity: 0.6;
  top: 2px;
  left: -1px;
`;

const Illustration = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 180;
  height: 135px;
`;
