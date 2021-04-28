import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

export const User = styled.View`
  justify-content: center;
  align-items: center;
 
`

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`

export const InitialText = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  text-transform: uppercase;
  text-align: center;
`

export const Initials = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.shape};
  margin-bottom: 16px;

`

export const Username = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 23px;
  color: ${props => props.theme.colors.heading};
`

export const Form = styled.View`
  width: 100%;
  margin-top: 67px;
`
