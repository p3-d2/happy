import React from 'react'
import useTheme from '../../utils/useTheme'

import {
  Container,
  Wrapper,
  Imagem,
  Main,
  Title,
  Details,
  Location,
  Strong,
  Span,
  Link,
  ArrowIcon
} from './styles'

import Logo from '../../assets/Logo.svg'

const Landing: React.FC = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <Wrapper>
        <Imagem src={Logo} alt="Happy" />

        <Main>
          <Title>Leve felicidade para o mundo</Title>
          <Details>Visite orfanatos e mude o dia de muitas crianças</Details>
        </Main>

        <Location>
          <Strong>Rio de Janeiro</Strong>
          <Span>Rio de Janeiro</Span>
        </Location>

        <Link to="/app">
          <ArrowIcon size={26} color={colors.shadow} />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Landing
