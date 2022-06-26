import React from "react";
import styled from "styled-components";

export default function ProjectWaves() {
  return (
    <Wrapper>
      <Background />
      <Elipse2 />
      <Elipse />
      <Wave
        src="/images/waves/projects-hero-wave-blur.svg"
        style={{ top: "0px" }}
      />
      <Wave
        src="/images/waves/projects-hero-wave.svg"
        style={{ top: "650px" }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  background: linear-gradient(135deg, #92ffc0 0%, #002661 100%);

  position: absolute;
  width: 100%;
  width: 1440px;
  height: 880px;
  z-index: -1;
`;

const Elipse = styled.div`
  position: absolute;
  width: 1127px;
  height: 1127px;
  left: -335px;
  top: -232px;
  border-radius: 50%;
  z-index: -1;

  background: linear-gradient(173.03deg, #0f3dc9 13.59%, #e8a358 86.1%), #d9d9d9;
  box-shadow: inset 0px 10px 10px rgba(255, 255, 255, 0.4),
    inset 0px -10px 20px rgba(255, 255, 255, 0.4);
`;

const Elipse2 = styled.div`
  position: absolute;
  width: 693px;
  height: 693px;
  left: 294px;
  top: 245px;
  border-radius: 50%;
  z-index: -1;
  background: linear-gradient(
      196.45deg,
      #4261ad 9.35%,
      #254591 27.46%,
      #5f7a44 57.36%,
      #cdb13a 86.72%
    ),
    linear-gradient(173.03deg, #0f3dc9 13.59%, #e8a358 86.1%), #d9d9d9;
  box-shadow: inset 0px 10px 10px #7ea1dc, inset 0px -10px 20px #f4e85d;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
`;
