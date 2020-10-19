import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
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
  InfoIcon,
  ContactButton,
  WhatsappIcon
} from './styles'

import SideBar from '../../components/SideBar'

import mapIcon from '../../utils/mapIcon'

const Orphanage: React.FC = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <SideBar />

      <Main>
        <OrphanageDetails>
          <ImgPrincipal
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <Imgs className="images">
            <ButtonImg className="active" type="button">
              <Img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImg>
            <ButtonImg type="button">
              <Img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImg>
            <ButtonImg type="button">
              <Img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImg>
            <ButtonImg type="button">
              <Img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImg>
            <ButtonImg type="button">
              <Img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImg>
            <ButtonImg type="button">
              <Img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImg>
          </Imgs>

          <OrphangeDetailsContent>
            <Title>Lar das meninas</Title>
            <Details>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </Details>

            <MapContainer>
              <Map
                center={[-27.2092052, -49.6401092]}
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
                  position={[-27.2092052, -49.6401092]}
                />
              </Map>

              <Footer>
                <A href="">Ver rotas no Google Maps</A>
              </Footer>
            </MapContainer>

            <Hr />

            <SubTitle>Instruções para visita</SubTitle>
            <Details>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </Details>

            <OpenDetails>
              <Hour>
                <ClockIcon size={32} color={colors.sideBarGradientPrimary} />
                Segunda à Sexta <Br />
                8h às 18h
              </Hour>
              <OpenOnWeekends>
                <InfoIcon size={32} color={colors.infoIcon} />
                Atendemos <Br />
                fim de semana
              </OpenOnWeekends>
            </OpenDetails>

            <ContactButton type="button">
              <WhatsappIcon size={20} color={colors.white} />
              Entrar em contato
            </ContactButton>
          </OrphangeDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  )
}

export default Orphanage
