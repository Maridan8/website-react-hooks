import React from "react"
import styled from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import { H1, SmallText } from "../styles/TextStyles"
import Header from "../layout/Header"

export default function UpdatesSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <MockupWrapper>
          <MockupAnimation />
        </MockupWrapper>
        <TextWrapper>
          <Title>A gente já volta</Title>
          <Description>
            Estamos atualizando o site. Volte daqui a pouco.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const MockupWrapper = styled.div`
  width: 50%;
  height: max-content;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  max-width: 1234px;

  margin: 0 auto;
  padding: 220px 30px;

  @media (max-width: 600px) {
    // Adaptive Layout
    grid-template-columns: 1fr;
    gap: 100px;
    margin: 0 auto;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 30px;
  text-align: center;

  z-index: 2;
`

const Title = styled(H1)``

const Description = styled(SmallText)``
