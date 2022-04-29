import React from "react";
import styled from "styled-components";

export function CreatorWaves() {
  return (
    <Wrapper>
      <Wave src="/images/waves/creator-wave1.svg" style={{ top: "0px" }} />
      <Wave src="/images/waves/creator-wave2.svg" style={{ top: "100px" }} />
      <Wave
        src="/images/waves/certificate-lines.svg"
        style={{ top: "300px" }}
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
