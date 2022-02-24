import React from "react";
import styled from "styled-components";

export default function BigSurWaves() {
  return (
    <Wrapper>
      <Wave src="/images/waves/livestream-wave1.svg" style={{ top: "0px" }} />
      <Wave src="/images/waves/livestream-wave2.svg" style={{ top: "160px" }} />
      <Wave src="/images/waves/livestream-wave3.svg" style={{ top: "280px" }} />
      <Wave src="/images/waves/livestream-wave4.svg" style={{ top: "50px" }} />
      <Wave src="/images/waves/livestream-wave5.svg" style={{ top: "400px" }} />
      <Wave src="/images/waves/livestream-wave6.svg" style={{ top: "700px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1234;
  position: absolute;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
`;
