import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import useTheme from '../../utils/useTheme'
import mapIcon from '../../utils/mapIcon'

import {
  Container,
  Aside,
  Header,
  Imagem,
  Title,
  Details,
  Footer,
  Strong,
  Span,
  Link,
  PlusIcon,
  ArrowIcon
} from './styles'

import mapMarker from '../../assets/mapMarker.svg'

const OrphanageMap: React.FC = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <Aside>
        <Header>
          <Imagem src={mapMarker} alt="Happy" />

          <Title>Escolha um orfanato no mapa</Title>
          <Details>Muitas crianças estão esperando a sua visita</Details>
        </Header>

        <Footer>
          <Strong>Rio de Janeiro</Strong>
          <Span>Rio de Janeiro</Span>
        </Footer>
      </Aside>

      <Map
        center={[-22.8965395, -43.6279325]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          /* don't copy my credential */
        />

        <Marker icon={mapIcon} position={[-22.8965395, -43.6279325]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="">
              <ArrowIcon size={20} color={colors.white} />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/">
        <PlusIcon size={32} color={colors.white} />
      </Link>
    </Container>
  )
}

export default OrphanageMap
