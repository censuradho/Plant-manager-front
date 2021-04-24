import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;

`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`

export const Emoji = styled.Text`
  font-size: 44px;
  margin-bottom: 40px;
`

export const Answer = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${props => props.theme.colors.heading};
  margin-bottom: 24px;
`

export const FormFooter = styled.View`
  padding: 0px 20px;
  width: 100%;
  margin-top: 40px;
`