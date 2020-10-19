import styled from 'styled-components'
import { Link as ReactRouterDomLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from '../../styles/icons'

import Landing from '../../assets/landing.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props =>
    `linear-gradient(329.54deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`

export const Wrapper = styled(motion.div)`
  position: relative;

  max-width: 1100px;
  width: 100%;

  max-height: 600px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: url(${Landing}) no-repeat 80% center;
  background-size: contain;
`

export const Imagem = styled(motion.img)``

export const Main = styled(motion.main)`
  max-width: 350px;
`

export const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.extraBold};
  font-size: ${props => props.theme.fontSizes.giant};
  line-height: ${props => props.theme.lineHeights.giant};
`

export const Details = styled.p`
  margin-top: 40px;
  font-size: ${props => props.theme.fontSizes.normal};
  line-height: ${props => props.theme.lineHeights.normal};
`

export const Location = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;

  font-size: ${props => props.theme.fontSizes.normal};
  line-height: ${props => props.theme.lineHeights.normal};

  display: flex;
  flex-direction: column;

  text-align: right;
`

export const Strong = styled.strong`
  font-weight: ${props => props.theme.fontWeights.bold};
`

export const Span = styled.span``

export const Link = styled(ReactRouterDomLink)`
  position: absolute;
  right: 0;
  bottom: 0;
`

export const IconWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.quaternary};
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ArrowIcon = styled(FiArrowRight)``
