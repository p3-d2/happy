import styled from 'styled-components'
import { FiArrowLeft } from '../../styles/icons'

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(
    329.54deg,
    ${props => props.theme.colors.sideBarGradientPrimary} 0%,
    ${props => props.theme.colors.sideBarGradientSecondary} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Imagem = styled.img`
  width: 48px;
`

export const Footer = styled.footer``

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: ${props => props.theme.colors.backgroundButton};
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => props.theme.colors.sextiary};
  }
`

export const ArrowIcon = styled(FiArrowLeft)``
