import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`

export const UserImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`
export const UserInitials = styled.Text`
  color: ${props => props.theme.colors.heading};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 28px;

  text-align: center;
  
`

export const User = styled.View`
  background: ${props => props.theme.colors.shape};
  border-radius: 210px;
  justify-content: center;
  width: 120px;
  height: 120px;
  align-items: center;
`

export const EditButton = styled(RectButton)`
  background: ${props => props.theme.colors.green};
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -10px;
  bottom: 10px;
`

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
  font-size: 24px;
  margin-top: 64px;
  text-align: center;
  max-width: 250px;
`

export const Footer = styled.View`
  padding: 0 20px;
  width: 100%;
  min-height: 120px;
  margin-top: 40px;
  justify-content: space-between;
`
