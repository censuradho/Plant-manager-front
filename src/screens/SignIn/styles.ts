import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
  font-size: 23px;
  margin-bottom: 46px;
`

export const Logo = styled.Image`
  width: 104px;
  height: 58.62px;
  margin: 0 auto;
`

export const Form = styled.View`
  justify-content: space-between;
  padding: 20px;
  margin-top: 40px;
`

export const SubmitContainer = styled.View`
  margin: 53px 0 40px 0;
  padding: 0 20px;
`

export const Link = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const LinkText = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
  text-align: center;
  font-size: 14px
`