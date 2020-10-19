import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

import {
  Container,
  Main,
  Form,
  Fieldset,
  Legend,
  InputBlock,
  Label,
  Input,
  Span,
  TextArea,
  UploadedImages,
  NewImage,
  PlusIcon,
  ButtonSelectDiv,
  ButtonSelect,
  ConfirmButton
} from './styles'

import SideBar from '../../components/SideBar'

import mapIcon from '../../utils/mapIcon'

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <Main>
        <Form>
          <Fieldset>
            <Legend>Dados</Legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
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

            <InputBlock>
              <Label htmlFor="namme">Nome</Label>
              <Input id="name" />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="about">
                Sobre <Span>Máximo de 300 caracteres</Span>
              </Label>
              <TextArea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="images">Fotos</Label>

              <UploadedImages></UploadedImages>

              <NewImage>
                <PlusIcon size={24} color="#15b6d6" />
              </NewImage>
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <Legend>Visitação</Legend>

            <InputBlock>
              <Label htmlFor="instructions">Instruções</Label>
              <TextArea id="instructions" />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="opening_hours">Nome</Label>
              <Input id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="open_on_weekends">Atende fim de semana</Label>

              <ButtonSelectDiv className="button-select">
                <ButtonSelect type="button" className="active">
                  Sim
                </ButtonSelect>
                <ButtonSelect type="button">Não</ButtonSelect>
              </ButtonSelectDiv>
            </InputBlock>
          </Fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </Form>
      </Main>
    </Container>
  )
}

export default CreateOrphanage
