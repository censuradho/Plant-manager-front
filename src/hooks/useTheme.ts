import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

function useTheme () {
  return useContext(ThemeContext)
}

export default useTheme