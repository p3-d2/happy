import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'

import Theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <h1>Pedro</h1>
    </ThemeProvider>
  )
}

export default App
