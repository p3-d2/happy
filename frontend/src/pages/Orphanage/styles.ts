import styled from 'styled-components'
import { FiClock, FiInfo, FaWhatsapp } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
`

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderForm};
  border-radius: 20px;

  overflow: hidden;
`

export const ImgPrincipal = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

export const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`

export const ButtonImg = styled.button`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: 0.6;

  &.active {
    opacity: 1;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 88px;
  object-fit: cover;
`

export const OrphangeDetailsContent = styled.div`
  padding: 80px;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.title};
  font-size: ${props => props.theme.fontSizes.big};
  line-height: ${props => props.theme.lineHeights.big};
  margin-bottom: 8px;
`

export const Details = styled.p`
  line-height: ${props => props.theme.lineHeights.normal};
  color: ${props => props.theme.colors.legendColor};
  margin-top: 24px;
`

export const MapContainer = styled.div`
  margin-top: 64px;
  background: ${props => props.theme.colors.backgroundContainer};
  border: 1px solid ${props => props.theme.colors.borderContainer};
  border-radius: 20px;

  .leaflet-container {
    border-bottom: 1px solid ${props => props.theme.colors.leafletContainer};
    border-radius: 20px;
  }
`

export const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
`

export const A = styled.a`
  line-height: ${props => props.theme.lineHeights.small};
  color: ${props => props.theme.colors.colorPopup};
`

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background: ${props => props.theme.colors.hrColor};
  margin: 64px 0;
`

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.legend};
  line-height: ${props => props.theme.lineHeights.big};
  color: ${props => props.theme.colors.title};
`

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;

    svg {
      display: block;
      margin-bottom: 20px;
    }
  }
`

export const Hour = styled.div`
  background: linear-gradient(
    149.97deg,
    ${props => props.theme.colors.backgroundContainer} 8.13%,
    ${props => props.theme.colors.white} 92.67%
  );
  border: 1px solid ${props => props.theme.colors.borderContainer};
  color: ${props => props.theme.colors.legendColor};
`

export const ClockIcon = styled(FiClock)``

export const Br = styled.br``

export const OpenOnWeekends = styled.div`
  background: linear-gradient(
    154.16deg,
    ${props => props.theme.colors.buttonActiveBackground} 7.85%,
    ${props => props.theme.colors.white} 91.03%
  );
  border: 1px solid ${props => props.theme.colors.buttonActiveBorder};
  color: ${props => props.theme.colors.buttonActiveColor};

  &.dont-open {
    background: linear-gradient(
      154.16deg,
      ${props => props.theme.colors.backgroundOpenOnWeekends} 7.85%,
      ${props => props.theme.colors.white} 91.03%
    );
    border: 1px solid ${props => props.theme.colors.borderOpenOnWeekends};
    color: ${props => props.theme.colors.colorOpenOnWeekends};
  }
`

export const InfoIcon = styled(FiInfo)``

export const ContactButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: ${props => props.theme.colors.buttonConfirmBackground};
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.buttonConfirmHover};
  }

  svg {
    margin-right: 16px;
  }
`

export const WhatsappIcon = styled(FaWhatsapp)``
