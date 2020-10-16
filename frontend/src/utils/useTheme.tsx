import { useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

export default function useTheme(): DefaultTheme {
  const { colors, fontSizes, fontWeights, lineHeights, title } = useContext(
    ThemeContext
  )
  return { colors, fontSizes, fontWeights, lineHeights, title }
}
