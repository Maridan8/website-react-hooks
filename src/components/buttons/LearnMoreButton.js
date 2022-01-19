import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { BodyIntro } from "../styles/TextStyles";

export default function LearnMoreButton() {
  return (
    <Link to="/page-2">
      <Wrapper>
        <Icon src="images/icons/chat.svg" />
        <Subtitle>Saiba mais</Subtitle>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  width: 150px;
  height: 44px;

  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 28px 90px;
  align-items: center;

  //animation
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 2);
  }

  :hover {
    transform: translateY(-2px); // moves up
    box-shadow: 0px 20px 40px rgba(1, 0, 0, 0.15);

    .icon {
      transform: scale(2);
    }
  }
`;

const Subtitle = styled(BodyIntro)`
  color: white;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  align-items: center; // each item is centered. the content itself
  align-content: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;
