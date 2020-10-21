import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import useTheme from '../../utils/useTheme'
import mapIcon from '../../utils/mapIcon'

import {
  Container,
  Aside,
  Header,
  Img,
  Title,
  Details,
  Footer,
  Strong,
  Span,
  MapContainer,
  Link,
  IconWrapper,
  PlusIcon,
  ArrowIcon
} from './styles'

import mapMarker from '../../assets/mapMarker.svg'
import api from '../../services/api'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

const OrphanageMap: React.FC = () => {
  const { colors } = useTheme()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => setOrphanages(response.data))
  }, [])

  const aside = {
    hidden: { x: -400 },
    visible: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        delay: 0.4,
        duration: 0.8,
        type: 'spring'
      }
    }
  }

  const global = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const map = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2.8, duration: 0.5 } }
  }

  const button = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 4, duration: 0.5 } },
    hover: {
      backgroundColor: colors.secondary,
      transition: { duration: 0.3 }
    }
  }

  return (
    <Container>
      <Aside variants={aside} initial="hidden" animate="visible">
        <Header>
          <Img src={mapMarker} alt="Happy" variants={global} />

          <Title variants={global}>Escolha um orfanato no mapa</Title>
          <Details variants={global}>
            Muitas crianças estão esperando a sua visita
          </Details>
        </Header>

        <Footer>
          <Strong variants={global}>Rio de Janeiro</Strong>
          <Span variants={global}>Rio de Janeiro</Span>
        </Footer>
      </Aside>

      <MapContainer variants={map} initial="hidden" animate="visible">
        <Map
          center={[-22.8965395, -43.6279325]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          {orphanages.map(({ id, latitude, longitude, name }) => (
            <Marker key={id} icon={mapIcon} position={[latitude, longitude]}>
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {name}
                <Link to={`/orphanages/${id}`}>
                  <ArrowIcon size={20} color={colors.white} />
                </Link>
              </Popup>
            </Marker>
          ))}
        </Map>
      </MapContainer>

      <Link to="/orphanages/create">
        <IconWrapper
          variants={button}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <PlusIcon size={32} color={colors.white} />
        </IconWrapper>
      </Link>
    </Container>
  )
}

export default OrphanageMap
