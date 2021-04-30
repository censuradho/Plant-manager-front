import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: ${props => props.theme.colors.background};
`

export const Title = styled.Text`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  font-size: 20px;
`

export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.shape};
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 0;
`

export const Label = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
  font-size: 17px;
  margin-left: 15px;
`
export const WarnButton = styled(Button)`

`

export const WarnText = styled(Label)`

`