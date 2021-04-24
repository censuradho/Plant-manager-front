import React from 'react'
import { ThemeProvider } from 'styled-components'


import light from './light'

interface ThemeProps {
	children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => {
	return (
		<ThemeProvider theme={light}>
			{ children }
		</ThemeProvider>
	)
}

export default Theme
