import styled from 'styled-components'
import { Link as ReactRouterDomLink } from 'react-router-dom'
import { FiPlus, FiArrowRight } from '../../styles/icons'

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  .map-popup {
    .leaflet-popup-content-wrapper {
      background: ${props => props.theme.colors.backgroundPopup};
      border-radius: 20px;
      box-shadow: none;
    }

    .leaflet-popup-content {
      position: relative;

      color: ${props => props.theme.colors.colorPopup};
      font-size: ${props => props.theme.fontSizes.normal};
      font-weight: ${props => props.theme.fontWeights.bold};
      margin: 8px 12px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        position: absolute;
        top: 50%;
        right: -6px;
        transform: translateY(-50%);

        width: 40px;
        height: 40px;
        background: ${props => props.theme.colors.quintenary};
        box-shadow: 17.28px 27.65px 41.48px
          ${props => props.theme.colors.shadowPopup};
        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }
`

export const Aside = styled.aside`
  width: 400px;
  background: ${props =>
    `linear-gradient(329.54deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};

  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header``

export const Imagem = styled.img``

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.big};
  margin-top: 32px;
`

export const Details = styled.p`
  line-height: ${props => props.theme.lineHeights.small};
  margin-top: 24px;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: ${props => props.theme.lineHeights.small};
`

export const Strong = styled.strong`
  font-weight: ${props => props.theme.fontWeights.bold};
`

export const Span = styled.span``

export const Link = styled(ReactRouterDomLink)`
  z-index: 10;

  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: ${props => props.theme.colors.quintenary};
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 500ms;

  &:hover {
    background: ${props => props.theme.colors.sextiary};
  }
`

export const PlusIcon = styled(FiPlus)``

export const ArrowIcon = styled(FiArrowRight)``
