import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  body, input, button, textarea {
    font: ${props => props.theme.fontWeights.normal} ${props =>
  props.theme.fontSizes.small} Nunito, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul  {
    list-style: none;
  }

  button, input, textarea {
    border: none;
    outline: none;
  }
`
