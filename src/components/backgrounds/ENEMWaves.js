import React from "react";
import styled from "styled-components";

export function ENEMWaves() {
  return (
    <Wrapper>
      <Wave src="/images/waves/enem/enem-wave1.svg" style={{ top: "0px" }} />
      <Wave
        src="/images/waves/enem/live-elipse1.svg"
        style={{ top: "220px", left: "50px" }}
      />
      <Wave
        src="/images/waves/enem/live-elipse2.svg"
        style={{ top: "240px", left: "250px" }}
      />
      <Wave src="/images/waves/enem/enem-wave2.svg" style={{ top: "500px" }} />
      <Wave
        src="/images/waves/enem/live-lines.svg"
        style={{ left: "-270px" }}
      />
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
