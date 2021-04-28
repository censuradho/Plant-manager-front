import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
  padding: 30px 0;
`

export const PerfilImage = styled.View`
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
`



export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-size: 17px;
  font-family: ${props => props.theme.fonts.heading};
`