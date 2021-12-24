import React from "react";
import styled from "styled-components";
import LearnMoreButton from "../buttons/LearnMoreButton";
import {
  BodyIntro,
  Caption,
  Caption2,
  H2,
  MediumText,
  H3,
  BodyMain,
  SmallText2,
} from "../styles/TextStyles";

export default function TestimonialSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Testimonial>
          <Avatar src="images/avatars/lis.png" />
          <Name>Lisane Mariádne</Name>
          <Profession>PROFESSORA DE REDAÇÃO</Profession>
          <Text>
            Fui sua professora durante o Ensino Fundamental e, naquele momento,
            já era clara a sua maturidade. Sempre que vejo seus avanços, fico
            com esperança em persistir em meu trabalho docente, que não é nada
            fácil ou simples de encarar cotidianamente. Além dos merecidíssimos
            parabéns, obrigada, João!
          </Text>
        </Testimonial>
        <Testimonial>
          <Avatar src="images/avatars/Francielly.png" />
          <Name>Francielly Freire</Name>
          <Profession>PROFESSORA DE PORTUGUÊS</Profession>
          <Text>
            Centrado, autônomo, decidido, João alegrou meu coração com seu
            jeitinho. Suas dúvidas sobre conteúdos complexos motivaram
            discussões enriquecedoras e revelaram a postura humilde e disposta
            de um rapaz ainda muito jovem. Enxergo coerência em seus passos,
            nitidamente percorridos com a dedicação que lhe é peculiar.
          </Text>
        </Testimonial>
        <TextWrapper>
          <SmallTitle>DEPOIMENTO DE</SmallTitle>
          <Title>PROFESSORES</Title>
          <Description>
            Confira o depoimento de professores que me apoiaram durante algumas
            etapas da minha vida acadêmica!
          </Description>
          <LearnMoreButton />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 100px;
  padding-left: 30px;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  align-items: center;
  align-content: center;
`;

const Testimonial = styled.div`
  width: 340px;
  height: 346px;
  position: relative;

  background: rgba(15, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    filter: hue-rotate(10deg) brightness(120%) saturate(120%);
    transform: scale(1.05);
  }
`;

const TextWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H2)`
  // This is a color variable calling ColorStyles
  color: linear-gradient(180deg, #730040 0%, #301cbe 100%); ;
`;

const SmallTitle = styled(Caption2)`
  line-height: 30%;
`;

const Description = styled(MediumText)`
  font-size: 15px;
  line-height: 130%;
  opacity: 0.7;
`;

const Text = styled(Caption)`
  color: white;
  opacity: 0.8;
`;

const Name = styled(BodyMain)`
  color: white;
`;

const Profession = styled(SmallText2)`
  color: #ff9595;
  line-height: 100%;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
`;
