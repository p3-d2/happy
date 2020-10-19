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
  IconWrapper,
  Link,
  ArrowIcon
} from './styles'

import Logo from '../../assets/Logo.svg'

const Landing: React.FC = () => {
  const { colors } = useTheme()

  const logo = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.9,
        when: 'beforeChildren',
        staggerChildren: 1,
        type: 'spring'
      }
    }
  }

  const region = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: 1.3, type: 'spring' }
    }
  }

  const title = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, delay: 2, type: 'spring' }
    }
  }

  const background = {
    hidden: { backgroundPosition: '180% center' },
    visible: {
      backgroundPosition: '80% center',
      transition: { duration: 1, delay: 2.9, type: 'spring' }
    }
  }

  const button = {
    hidden: { opacity: 0, scale: 1.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 10, type: 'spring' }
    },
    hover: {
      backgroundColor: colors.tertiary,
      transition: { duration: 0.3 }
    }
  }

  return (
    <Container>
      <Wrapper variants={background} initial="hidden" animate="visible">
        <Imagem
          src={Logo}
          alt="Happy"
          variants={logo}
          initial="hidden"
          animate="visible"
        />

        <Main variants={title} initial="hidden" animate="visible">
          <Title>Leve felicidade para o mundo</Title>
          <Details>Visite orfanatos e mude o dia de muitas crianças</Details>
        </Main>

        <Location variants={region} initial="hidden" animate="visible">
          <Strong>Rio de Janeiro</Strong>
          <Span>Rio de Janeiro</Span>
        </Location>

        <Link to="/app">
          <IconWrapper
            variants={button}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <ArrowIcon size={26} color={colors.shadow} />
          </IconWrapper>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Landing
