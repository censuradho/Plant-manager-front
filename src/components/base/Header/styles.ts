import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${StatusBar.currentHeight};
`

export const Username = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  font-size: 32px;
`

export const Strong = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
  font-size: 32px;
`

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px; 
`

export const InitialContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.shape};
`
export const Initials = styled.Text`
  font-size: 28px;
  font-family: ${props => props.theme.fonts.heading};
  text-transform: uppercase;
`