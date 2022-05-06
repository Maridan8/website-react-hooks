import React from "react";
import styled from "styled-components";
import Ipad from "../assets/video/iPad.mp4";

export default function IpadSection() {
  return (
    <Wrapper>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Ipad} type="video/mp4" />
      </video>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  height: 570px;
`;
