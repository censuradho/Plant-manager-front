import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${props => props.theme.colors.shape};
  border-radius: 20px;
  padding: 20px 0px;
  margin: 10px;
  align-items: center;
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.green_dark};
  font-family: ${props => props.theme.fonts.heading};
  margin: 16px 0px;
`

export const Image = styled(SvgFromUri)`
  width: 70px;
  height: 70px;
`