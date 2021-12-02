import React from "react";
import styled from "styled-components";

export default function HandBook() {
  return (
    <Wrapper>
      {/* <Icon
        src="/images/icons/handbookBlur.svg"
        style={{ filter: "blur(60px" }}
      /> */}
      <Icon src="/images/icons/handbook.svg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 431.3px;
`;
const Icon = styled.img``;
