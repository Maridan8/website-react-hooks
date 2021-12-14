import React from "react";
import styled from "styled-components";

export function ENEMWaves() {
  return (
    <Wrapper>
      <Wave src="/images/waves/courses-wave1.svg" style={{ top: "0px" }} />
      <Wave
        src="/images/waves/courses-wave2.svg"
        style={{ top: "50px", filter: "blur(50px)" }}
      />
      <Wave
        src="/images/waves/courses-wave3.svg"
        style={{ top: "100px", filter: "blur(50px)" }}
      />
      <Wave src="/images/waves/courses-wave4.svg" style={{ top: "350px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
`;
