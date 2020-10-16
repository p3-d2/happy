import styled from 'styled-components'
import { Link as ReactRouterDomLink } from 'react-router-dom'
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
`

export const Wrapper = styled.div`
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

export const Imagem = styled.img``

export const Main = styled.main`
  max-width: 350px;
`

export const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.extraBold};
  font-size: ${props => props.theme.fontSizes.big};
  line-height: ${props => props.theme.lineHeights.big};
`

export const Details = styled.p`
  margin-top: 40px;
  font-size: ${props => props.theme.fontSizes.normal};
  line-height: ${props => props.theme.lineHeights.normal};
`

export const Location = styled.div`
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

  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.quaternary};
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 500ms;

  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
`

export const ArrowIcon = styled(FiArrowRight)``
