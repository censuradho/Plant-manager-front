import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface Props {
  active?: boolean
}

export const Text = styled.Text<Props>`
  color: ${props => props.active ? props.theme.colors.green : props.theme.colors.heading};
  font-family: ${props => props.active ? props.theme.fonts.heading : props.theme.fonts.text};
`

export const Container = styled(RectButton).attrs((props: Props)=> ({ ...props }))`
  background: ${props => props.active ? props.theme.colors.green_light :  props.theme.colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`