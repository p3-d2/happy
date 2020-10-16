import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      background: string
      white: string
      text: string
    }
    fontWeights: {
      normal: number
      bold: number
      extraBold: number
    }
    fontSizes: {
      normal: string
    }
  }
}
