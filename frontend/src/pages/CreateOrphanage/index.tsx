import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import {
  Container,
  Main,
  Form,
  Fieldset,
  Legend,
  MapContainer,
  InputBlock,
  Label,
  Input,
  Span,
  TextArea,
  ImagesContainer,
  LabelNewImage,
  ImgWrapper,
  ExcludeImg,
  Img,
  PlusIcon,
  ButtonSelectDiv,
  ButtonSelect,
  ConfirmButton
} from './styles'

import SideBar from '../../components/SideBar'

import mapIcon from '../../utils/mapIcon'
import api from '../../services/api'

interface PreviewImage {
  name: string
  url: string
}

const CreateOrphanage: React.FC = () => {
  const history = useHistory()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([])

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng
    setPosition({ latitude: lat, longitude: lng })
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    if (images) {
      const Images: File[] = [...images, ...selectedImages]
      setImages(Images)
    }
    if (!images) setImages(selectedImages)

    const selectedImagesPreview: PreviewImage[] = selectedImages.map(image => ({
      name: image.name,
      url: URL.createObjectURL(image)
    }))

    if (previewImages) {
      const Previews: PreviewImage[] = [
        ...previewImages,
        ...selectedImagesPreview
      ]
      setPreviewImages(Previews)
    }
    if (!previewImages) setPreviewImages(selectedImagesPreview)
  }

  function handleDeleteImage(event: any) {
    event.preventDefault()
    const name = event.target.getAttribute('name')

    const item = images.findIndex(image => image.name === name)
    const imagesArray: File[] = [...images]
    imagesArray.splice(item, 1)

    setImages(imagesArray)

    const imagesPreview = imagesArray.map(image => ({
      name: image.name,
      url: URL.createObjectURL(image)
    }))

    setPreviewImages(imagesPreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { latitude, longitude } = position

    const data = new FormData()

    data.append('name', name)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach(image => {
      data.append('images', image)
    })

    await api.post('orphanages', data)

    alert('Cadastro realizado com sucesso')

    history.push('/app')
  }

  const main = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 1
      }
    }
  }

  const global = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  }

  return (
    <Container>
      <SideBar />

      <Main variants={main} initial="hidden" animate="visible">
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Legend variants={global}>Dados</Legend>

            <MapContainer variants={global}>
              <Map
                center={[-22.8901426, -43.6392363]}
                style={{ width: '100%', height: 280 }}
                zoom={15}
                onClick={handleMapClick}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>
            </MapContainer>

            <InputBlock variants={global}>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputBlock>

            <InputBlock variants={global}>
              <Label htmlFor="about">
                Sobre <Span>Máximo de 300 caracteres</Span>
              </Label>
              <TextArea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </InputBlock>

            <InputBlock variants={global}>
              <Label htmlFor="images">Fotos</Label>

              <ImagesContainer>
                {previewImages.map(image => (
                  <ImgWrapper key={image.name}>
                    <ExcludeImg name={image.name} onClick={handleDeleteImage}>
                      X
                    </ExcludeImg>
                    <Img src={image.url} alt={name} />
                  </ImgWrapper>
                ))}

                <LabelNewImage htmlFor="image[]">
                  <PlusIcon size={24} color="#15b6d6" />
                </LabelNewImage>
              </ImagesContainer>

              <Input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <Legend variants={global}>Visitação</Legend>

            <InputBlock variants={global}>
              <Label htmlFor="instructions">Instruções</Label>
              <TextArea
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </InputBlock>

            <InputBlock variants={global}>
              <Label htmlFor="opening_hours">Horário de funcionamento</Label>
              <Input
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpeningHours(e.target.value)}
              />
            </InputBlock>

            <InputBlock variants={global}>
              <Label htmlFor="open_on_weekends">Atende fim de semana</Label>

              <ButtonSelectDiv className="button-select">
                <ButtonSelect
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </ButtonSelect>
                <ButtonSelect
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </ButtonSelect>
              </ButtonSelectDiv>
            </InputBlock>
          </Fieldset>

          <ConfirmButton variants={global} type="submit">
            Confirmar
          </ConfirmButton>
        </Form>
      </Main>
    </Container>
  )
}

export default CreateOrphanage
