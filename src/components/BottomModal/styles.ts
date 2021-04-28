import styled from 'styled-components/native'

export const Container = styled.View`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 20px;
`

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, .3);
`

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`

export const ButtonText = styled.Text<{margin?: boolean }>`
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  font-size: 17px;
  margin-left: ${props => props.margin ? '10px' : '0px'}
`