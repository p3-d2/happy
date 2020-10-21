import React from 'react'

import { Container, ImgsContainer, Content, BoxButtons } from './styles'

import Panel from '../../Panel'
import Skeleton from '../../Skeleton'
import SideBar from '../../SideBar'

const LoadingOrphanage: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <Panel className="panel">
        <Skeleton className="background" />

        <ImgsContainer>
          <Skeleton className="image" />
          <Skeleton className="image" />
          <Skeleton className="image" />
        </ImgsContainer>

        <Content>
          <Skeleton className="title" />
          <Skeleton className="description big" />
          <Skeleton className="description medium" />

          <Skeleton className="map" />

          <Skeleton className="title" />
          <Skeleton className="description big" />
          <Skeleton className="description medium" />
          <Skeleton className="description small" />

          <BoxButtons>
            <Skeleton className="box" />
            <Skeleton className="box" />
          </BoxButtons>
        </Content>
      </Panel>
    </Container>
  )
}

export default LoadingOrphanage
