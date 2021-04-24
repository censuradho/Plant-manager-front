import { ProgressViewIOSComponent } from 'react-native'
import styled from 'styled-components/native'

interface Props {
  fill?: boolean,
  disabled?: boolean,
  stroke?: boolean
}

export const Button = styled.TouchableOpacity<Props>`
  background: ${props => (props.disabled && props.theme.colors.green_light) || props.stroke ? 'transparent' : props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  min-height: 56px;
  width: ${props => props.fill ? '100%' : 'auto'};
  min-width: 56px;
  padding: 0 10px;
` 

export const Text = styled.Text<Props>`
  color: ${props => props.stroke ? props.theme.colors.heading : props.theme.colors.white};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.heading};
`