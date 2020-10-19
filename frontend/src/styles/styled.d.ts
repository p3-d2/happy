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
      colorPopup: string
      background: string
      backgroundPopup: string
      backgroundButton: string
      sideBarGradientPrimary: string
      sideBarGradientSecondary: string
      white: string
      text: string
      shadow: string
      shadowPopup: string
    }
    fontWeights: {
      normal: number
      bold: number
      extraBold: number
    }
    fontSizes: {
      small: string
      normal: string
      popup: string
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
