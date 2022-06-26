import React from "react";
import styled from "styled-components";

export default function FooterWaves() {
  return (
    <Wrapper>
      <Wave
        src="/images/waves/footer/footer-wave2.svg"
        style={{ top: "20px" }}
      />
      <Wave
        src="/images/waves/footer/footer-wave3.svg"
        style={{ top: "100px" }}
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
