import { ProgressViewIOSComponent } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  fill?: boolean,
  disabled?: boolean
}

export const Button = styled.TouchableOpacity<Props>`
  background: ${props => props.disabled ? props.theme.colors.green_light : props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  min-height: 56px;
  width: ${props => props.fill ? '100%' : 'auto'};
  min-width: 56px;
  padding: 0 10px;
  color: ${props => props.theme.colors.white};
` 

export const Text = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.heading};
`