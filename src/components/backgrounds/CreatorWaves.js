import React from "react";
import styled from "styled-components";

export function CreatorWaves() {
  return (
    <Wrapper>
      <Wave src="/images/waves/certificate-wave1.svg" style={{ top: "0px" }} />
      <Wave
        src="/images/waves/certificate-wave2.svg"
        style={{ top: "100px" }}
      />
      <Wave
        src="/images/waves/creator-wave3.svg"
        style={{ top: "100px", filter: "blur(50px)" }}
      />
      {/* <Wave
        src="/images/waves/creator-wave4.svg"
        style={{ top: "300px", filter: "blur(80px)" }}
      /> */}
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
