import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { useParams } from 'react-router-dom'
import useTheme from '../../utils/useTheme'

import {
  Container,
  Main,
  OrphanageDetails,
  ImgPrincipal,
  Imgs,
  ButtonImg,
  Img,
  OrphangeDetailsContent,
  Title,
  Details,
  MapContainer,
  Footer,
  A,
  Hr,
  SubTitle,
  OpenDetails,
  Hour,
  ClockIcon,
  Br,
  OpenOnWeekends,
  InfoIcon
  // ContactButton,
  // WhatsappIcon
} from './styles'

import SideBar from '../../components/SideBar'

import mapIcon from '../../utils/mapIcon'
import api from '../../services/api'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: string[]
}

interface RoutesParams {
  id: string
}

const Orphanage: React.FC = () => {
  const { colors } = useTheme()
  const params = useParams<RoutesParams>()
  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  useEffect(() => {
    api
      .get(`orphanages/${params.id}`)
      .then(response => setOrphanage(response.data))
  }, [params.id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SideBar />

      <Main>
        <OrphanageDetails>
          <ImgPrincipal
            src={orphanage.images[activeImageIndex]}
            alt={orphanage.name}
          />

          <Imgs className="images">
            {orphanage.images.map((image, index) => (
              <ButtonImg
                key={index}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <Img src={image} alt={orphanage.name} />
              </ButtonImg>
            ))}
          </Imgs>

          <OrphangeDetailsContent>
            <Title>{orphanage.name}</Title>
            <Details>{orphanage.about}</Details>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <Footer>
                <A
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.latitude}`}
                >
                  Ver rotas no Google Maps
                </A>
              </Footer>
            </MapContainer>

            <Hr />

            <SubTitle>Instruções para visita</SubTitle>
            <Details>{orphanage.instructions}</Details>

            <OpenDetails>
              <Hour>
                <ClockIcon size={32} color={colors.sideBarGradientPrimary} />
                Segunda à Sexta <Br />
                {orphanage.opening_hours}
              </Hour>
              {orphanage.open_on_weekends ? (
                <OpenOnWeekends>
                  <InfoIcon size={32} color={colors.infoIcon} />
                  Atendemos <Br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends className="dont-open">
                  <InfoIcon size={32} color={colors.colorOpenOnWeekends} />
                  Não Atendemos <Br />
                  fim de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>

            {/* <ContactButton type="button">
              <WhatsappIcon size={20} color={colors.white} />
              Entrar em contato
            </ContactButton> */}
          </OrphangeDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  )
}

export default Orphanage
