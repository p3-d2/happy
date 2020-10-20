import styled from 'styled-components'
import { motion } from 'framer-motion'
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
      font-size: ${props => props.theme.fontSizes.small};
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

export const PopupWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.colors.shadow};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupContainer = styled.div`
  position: relative;
  padding: 40px;

  width: 400px;
  height: 300px;
  border-radius: 20px;

  background: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const PopupTop = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopupImg = styled.img`
  width: 72px;
  height: 72px;

  margin-bottom: 12px;
`

export const PopupTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`

export const PopupSpinner = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.background};
  border-top-color: ${props => props.theme.colors.primary};
  animation: spinner 0.6s linear infinite;
`

export const PopupTip = styled.div`
  position: absolute;
  left: 50%;
  bottom: -25px;
  transform: translateX(-50%);

  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid ${props => props.theme.colors.white};
`

export const Aside = styled(motion.aside)`
  width: 400px;
  background: ${props =>
    `linear-gradient(329.54deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};

  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header``

export const Img = styled(motion.img)``

export const Title = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.big};
  margin-top: 32px;
`

export const Details = styled(motion.p)`
  line-height: ${props => props.theme.lineHeights.small};
  margin-top: 24px;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: ${props => props.theme.lineHeights.small};
`

export const Strong = styled(motion.strong)`
  font-weight: ${props => props.theme.fontWeights.bold};
`

export const Span = styled(motion.span)``

export const MapContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
`

export const Link = styled(ReactRouterDomLink)`
  z-index: 10;

  position: absolute;
  right: 40px;
  bottom: 40px;
`

export const IconWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.primary};
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlusIcon = styled(FiPlus)``

export const ArrowIcon = styled(FiArrowRight)``
