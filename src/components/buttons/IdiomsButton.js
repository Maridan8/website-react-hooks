import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { BodyIntro, Caption2 } from "../styles/TextStyles";

export default function Icons(props) {
  const { subtitle, src } = props;
  return (
    <Wrapper>
      <Link to="/page-2">
        <TextWrapper>
          <Subtitle>{subtitle || "English"}</Subtitle>
        </TextWrapper>
      </Link>
      <IconWrapper>
        <Icon src={src || "/images/icons/english.svg"} />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 120px;
  height: 180px;
  padding: 35px;
`;

const TextWrapper = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.48) 0%,
    rgba(24, 32, 79, 0.3) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 50%;
  display: grid;

  align-items: center; // each item is centered. the content itself
  align-content: center;
  justify-content: center;

  //animation
  *,
  & {
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 2);
  }

  ${Wrapper}:hover & {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.3),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px); // moves up

    .icon {
      transform: scale(1.2);
    }
  }
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  justify-content: center; // center (horizontaly)
  align-content: center; // center (verticaly)
  justify-self: center; // center the content inside the column
  position: relative;
  top: -140px;
  left: 37px;
  align-items: center;

  *,
  & {
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 2);
  }

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    transform: translateY(-3px);
  }

  // so the ring can be on top: ;
`;

const Subtitle = styled(BodyIntro)`
  color: white;
  font-size: 16px;
  font-weight: 600;
  align-items: center; // each item is centered. the content itself
  align-content: center;
  justify-content: center;
`;

const Icon = styled.img``;
