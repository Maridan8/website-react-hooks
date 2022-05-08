import React from "react";
import styled from "styled-components";
import { Caption, H3 } from "../styles/TextStyles";

export default function ENEMCards(props) {
  const { src, title, subtitle } = props;
  return (
    <Wrapper>
      <ColorfulWrapper
        style={{
          background: "linear-gradient(180deg, #DC5F93 0%, #9356D0 100%)",
          filter:
            "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 20px 40px rgba(149, 87, 207, 0.3))",
        }}
      >
        {/* <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "15%" }} />
        <Handbook src={src || "/images/icons/handbookRed.svg"} /> */}
        <TextWrapper>
          <Illustration
            src={src || "/images/illustrations/illustration1.svg"}
          />
          <Title>{title || "Linguagens"}</Title>
          <Subtitle>{subtitle || "5 vídeos - 3 horas"}</Subtitle>
          <PlayWrapper>
            <Play src="images/icons/play.svg" />
          </PlayWrapper>
        </TextWrapper>
      </ColorfulWrapper>
      <ColorfulWrapper
        style={{
          background:
            "linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%)",
          filter:
            "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 20px 40px rgba(251, 94, 84, 0.3))",
        }}
      >
        {/* <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "15%" }} />
        <Handbook src={src || "/images/icons/handbookRed.svg"} /> */}
        <TextWrapper>
          <Illustration
            src={src || "/images/illustrations/illustration2.svg"}
          />
          <Title>{title || "Humanas"}</Title>
          <Subtitle>{subtitle || "5 vídeos - 3 horas"}</Subtitle>
          <PlayWrapper>
            <Play src="images/icons/play.svg" />
          </PlayWrapper>
        </TextWrapper>
      </ColorfulWrapper>
      <ColorfulWrapper
        style={{
          background:
            "linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%)",
          filter:
            "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 20px 40px rgba(73, 39, 172, 0.3))",
        }}
      >
        {/* <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "15%" }} />
        <Handbook src={src || "/images/icons/handbookRed.svg"} /> */}
        <TextWrapper>
          <Illustration
            src={src || "/images/illustrations/illustration3.svg"}
          />
          <Title>{title || "Natureza"}</Title>
          <Subtitle>{subtitle || "5 vídeos - 3 horas"}</Subtitle>
          <PlayWrapper>
            <Play src="images/icons/play.svg" />
          </PlayWrapper>
        </TextWrapper>
      </ColorfulWrapper>
      <ColorfulWrapper
        style={{
          background: "linear-gradient(180deg, #343563 0%, #4926AD 100%)",
          filter:
            "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 20px 40px rgba(73, 39, 172, 0.3))",
        }}
      >
        {/* <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "15%" }} />
        <Handbook src={src || "/images/icons/handbookRed.svg"} /> */}
        <TextWrapper>
          <Illustration
            src={src || "/images/illustrations/illustration4.svg"}
          />
          <Title>{title || "Matemática"}</Title>
          <Subtitle>{subtitle || "5 vídeos - 3 horas"}</Subtitle>
          <PlayWrapper>
            <Play src="images/icons/play.svg" />
          </PlayWrapper>
        </TextWrapper>
      </ColorfulWrapper>
      <ColorfulWrapper
        style={{
          background: "linear-gradient(360deg, #2FB8FF 0%, #9EECD9 100%)",
          filter:
            "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 20px 40px rgba(49, 185, 255, 0.3))",
        }}
      >
        {/* <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "15%" }} />
        <Handbook src={src || "/images/icons/handbookRed.svg"} /> */}
        <TextWrapper>
          <Illustration
            src={src || "/images/illustrations/illustration5.svg"}
          />
          <Title>{title || "Redação"}</Title>
          <Subtitle>{subtitle || "5 vídeos - 3 horas"}</Subtitle>
          <PlayWrapper>
            <Play src="images/icons/play.svg" />
          </PlayWrapper>
        </TextWrapper>
      </ColorfulWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 0px;

  display: grid;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
  align-content: center;
  @media (max-width: 1200px) {
    grid-template-columns: auto auto auto;
    justify-items: center;
  }
  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    justify-items: center;
  }
  @media (max-width: 550px) {
    grid-template-columns: auto;
  }
`;
const ColorfulWrapper = styled.div`
  /* Card */

  width: 200px;
  height: 320px;
  margin-top: 50px;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  /* Gradient 5 */
  border-radius: 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    transform: scale(1.1);
  }
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
