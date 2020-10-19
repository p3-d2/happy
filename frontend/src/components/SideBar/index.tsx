import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Imagem, Footer, Button, ArrowIcon } from './styles'

import mapMarkerImg from '../../assets/mapMarker.svg'
import useTheme from '../../utils/useTheme'

const SideBar: React.FC = () => {
  const { goBack } = useHistory()
  const { colors } = useTheme()

  return (
    <Container>
      <Imagem src={mapMarkerImg} alt="Happy" />

      <Footer>
        <Button type="button" onClick={goBack}>
          <ArrowIcon size={24} color={colors.white} />
        </Button>
      </Footer>
    </Container>
  )
}

export default SideBar
