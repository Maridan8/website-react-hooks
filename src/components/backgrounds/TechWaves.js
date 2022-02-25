import React from "react";
import styled from "styled-components";

export default function TechWaves() {
  return (
    <Wrapper>
      <Wave src="/images/waves/testimonial-wave1.svg" style={{ top: "0px" }} />
      <Wave
        src="/images/waves/testimonial-wave2.svg"
        style={{ top: "160px" }}
      />
      <Wave
        src="/images/waves/testimonial-wave3.svg"
        style={{ top: "280px" }}
      />
      <Wave src="/images/waves/testimonial-wave4.svg" style={{ top: "50px" }} />
      <Wave
        src="/images/waves/testimonial-wave5.svg"
        style={{ top: "370px" }}
      />
      <Wave
        src="/images/waves/testimonial-wave6.svg"
        style={{ top: "700px" }}
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
