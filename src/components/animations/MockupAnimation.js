import React from "react";
import styled, { keyframes } from "styled-components";

export default function MockupAnimation() {
  return (
    <Wrapper>
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <LogoWrapper>
        <Logo src="/images/logos/mainLogo.svg" />
      </LogoWrapper>
      <Blocked />
    </Wrapper>
  );
}

const animationR = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg) }
`;
const animationL = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg) }
`;
const Bubble1 = styled.div`
  animation-name: ${animationR};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  position: absolute;
  width: 570px;
  height: 570px;
  left: 0px;
  top: 0px;

  background: radial-gradient(
    92.97% 92.97% at 35.49% 0%,
    #0f1c2c 0%,
    #1e2c43 76.61%,
    #cf7130 99.99%
  );
  box-shadow: inset -16px -4px 20px rgba(255, 255, 255, 0.3),
    inset 8px -4px 28px rgba(223, 208, 255, 0.3),
    inset 0px -12px 16px rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  pointer-events: none;
`;

const Bubble2 = styled.div`
  animation-name: ${animationL};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  position: absolute;
  width: 415px;
  height: 415px;
  left: 83.38px;
  top: 132.74px;

  background: radial-gradient(
      47.51% 51.08% at 64.75% 69.35%,
      rgba(203, 87, 37, 0.46) 8.51%,
      rgba(224, 169, 82, 0.28) 100%
    ),
    linear-gradient(
      113.12deg,
      #071e43 8.35%,
      rgba(19, 54, 135, 0.647896) 52.09%,
      rgba(48, 94, 255, 0) 88.02%
    ),
    linear-gradient(
      168.61deg,
      rgba(245, 191, 96, 0.84) 20.29%,
      rgba(249, 115, 32, 0.955833) 68.9%,
      rgba(180, 132, 49, 0.84) 92.46%
    );
  background-blend-mode: overlay, normal, normal;
  box-shadow: inset 8px 4px 16px rgba(87, 114, 152, 0.3),
    inset -20px -8px 40px rgba(199, 184, 144, 0.3),
    inset 0px 0px 48px 18px rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`;

const Bubble3 = styled.div`
  animation-name: ${animationR};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  position: absolute;
  width: 272px;
  height: 272px;
  left: 157.98px;
  top: 157.98px;
  background: radial-gradient(
      47.51% 51.08% at 64.75% 69.35%,
      rgba(203, 87, 37, 0.46) 8.51%,
      rgba(224, 169, 82, 0.28) 100%
    ),
    radial-gradient(
      180.65% 495.7% at 0% 35.25%,
      rgba(16, 63, 128, 0.93) 4.37%,
      rgba(10, 30, 100, 0) 50.84%
    ),
    linear-gradient(180.22deg, rgba(245, 191, 96, 0.84) 1.66%, #e25c20 99.75%);
  background-blend-mode: overlay, normal, normal;
  box-shadow: inset -4px -4px 16px rgba(255, 255, 255, 0.3),
    inset 0px 0px 48px rgba(255, 255, 255, 0.3);

  border-radius: 50%;
`;
const Blocked = styled.div`
  position: absolute;
  width: 272px;
  height: 272px;
  left: 157.98px;
  top: 157.98px;
`;
const Wrapper = styled.div`
  position: relative;
  align-items: center;
  align-content: center;

  z-index: -1;
`;
const Logo = styled.img`
  animation-name: ${animationL};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  position: absolute;
  width: 171.01px;
  height: 168.31px;
  left: 50px;
  top: 50px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  width: 286.33px;
  height: 286.33px;
  left: 157.98px;
  top: 157.98px;
  position: relative;
`;
