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
      hrColor: string
      background: string
      backgroundPopup: string
      backgroundButton: string
      sideBarGradientPrimary: string
      sideBarGradientSecondary: string
      backgroundInput: string
      backgroundContainer: string
      leafletContainer: string
      white: string
      text: string
      legendColor: string
      labelColor: string
      shadow: string
      shadowPopup: string
      borderForm: string
      borderImage: string
      borderContainer: string
      buttonActiveBackground: string
      buttonActiveBorder: string
      buttonActiveColor: string
      buttonConfirmBackground: string
      buttonConfirmHover: string
      infoIcon: string
      title: string
    }
    fontWeights: {
      normal: number
      bold: number
      extraBold: number
    }
    fontSizes: {
      tooSmall: string
      small: string
      normal: string
      legend: string
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
