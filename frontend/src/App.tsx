import React from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import 'leaflet/dist/leaflet.css'

import GlobalStyles from './styles/global'

import Theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  )
}

export default App
