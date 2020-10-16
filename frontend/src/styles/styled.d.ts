import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      quintenary: string
      sextiary: string
      background: string
      white: string
      text: string
      shadow: string
    }
    fontWeights: {
      normal: number
      bold: number
      extraBold: number
    }
    fontSizes: {
      small: string
      normal: string
      big: string
      giant: string
    }
    lineHeights: {
      small: string
      normal: string
      big: string
      giant: string
    }
  }
}
