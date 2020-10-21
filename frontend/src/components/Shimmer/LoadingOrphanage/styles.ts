import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  .panel {
    width: 700px;
    height: 1300px;
    background: ${props => props.theme.colors.white};
    margin: 66px auto;
    border-radius: 20px;

    .background {
      width: 100%;
      height: 300px;
      border-radius: 20px 20px 0 0;
    }
  }
`

export const ImgsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;

  .image {
    width: 100%;
    height: 88px;
    border-radius: 20px;
  }
`

export const Content = styled.div`
  padding: 80px;

  .title {
    width: 66%;
    height: 30px;
    margin-bottom: 8px;
  }

  .description {
    width: 90%;
    height: 14px;
    margin-top: 20px;

    &.big {
      width: 90%;
    }

    &.medium {
      width: 70%;
    }

    &.small {
      width: 30%;
    }
  }

  .map {
    height: 240px;
    width: 100%;
    border-radius: 20px;
    margin: 64px 0;
  }
`

export const BoxButtons = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  .box {
    height: 160px;
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
  }
`
