import React from "react";
import styled from "styled-components";
import { Caption, Caption2, H3, SmallText2 } from "../styles/TextStyles";

export default function HandBook() {
  return (
    <Wrapper>
      <Handbook src="/images/icons/handbook1.svg" style={{ opacity: "30%" }} />
      <Handbook src="/images/icons/handbook2.svg" />
      <TopFilter />
      <TextWrapper>
        <BottomWrapper>
          <Head>VÍDEO</Head>
          <YouTube scr="/images/icons/YouTube.svg" />
        </BottomWrapper>
        <Title>
          Como ser <br /> estudioso
        </Title>
        <Subtitle>
          Conheça a maneira que eu utilizo <br /> para estudar melhor
        </Subtitle>
        <BottomWrapper>
          <IconWrapper>
            <Video src="images/icons/video.svg" />
          </IconWrapper>
          <IconText>Acessar vídeo</IconText>
        </BottomWrapper>
        <BottomWrapper>
          <IconWrapper>
            <File src="images/icons/coding.svg" />
          </IconWrapper>
          <IconText>Guia do estudo perfeito</IconText>
        </BottomWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 431.3px;
  position: relative;
`;

const Handbook = styled.img`
  position: absolute;
  top: 1px;
`;

const TopFilter = styled.div`
  position: absolute;
  width: 300px;
  height: 357px;
  background: rgba(0, 0, 0, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 0px 60px 60px 60px;
`;

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 26px;
  top: 30px;
  left: 30px;
`;

const Head = styled(SmallText2)`
  position: relative;
  color: white;
  opacity: 70%;
`;

const Title = styled(H3)`
  color: white;
`;

const Subtitle = styled(Caption)`
  color: white;
  opacity: 70%;
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background: rgba(242, 246, 255, 0.3);
  border-radius: 50%;
`;

const IconText = styled(Caption)`
  color: white;
`;

const Video = styled.img`
  position: relative;
  top: 9px;
  left: 6px;
`;

const File = styled.img`
  position: relative;
  top: 6px;
  left: 7px;
`;

const YouTube = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  left: 150px;
`;
