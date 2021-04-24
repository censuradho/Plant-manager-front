import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
  padding-bottom: 24px;
`

export const Text = styled.Text`
  color: ${props => props.theme.colors.heading};
  text-align: center;
  font-size: 18px;
  padding: 20px 0px;
  font-family: ${props => props.theme.fonts.text};
`

export const Title = styled.Text`
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: ${props => props.theme.colors.heading};
  margin-top: 38px;
  font-family: ${props => props.theme.fonts.heading};
`

export const Image = styled.Image``

