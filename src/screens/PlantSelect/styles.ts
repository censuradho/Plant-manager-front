import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`

export const WrapHeader = styled.View`
  padding: 30px;
`

export const Title = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-size: 17px;
  font-family: ${props => props.theme.fonts.heading};
  line-height: 20px;
  margin-top: 20px;

`

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
  font-size: 17px;
  line-height: 20px;

`

export const Plants = styled.View`
  flex: 1;
  padding: 0px 32px;
  justify-content: center;
  margin-top: 30px
`