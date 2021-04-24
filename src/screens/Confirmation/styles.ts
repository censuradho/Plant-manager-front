import styled from 'styled-components/native'
import Theme from '../../theme';


export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
`

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
  font-size: 24px;
  margin-top: 64px;
  text-align: center;
  max-width: 250px;
`

export const Card = styled.View`
`

export const Body = styled.Text`
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.heading};
  font-size: 17px;
  text-align: center;
  margin-top: 16px;
`

export const Emoji = styled.Text`
  font-size: 52px;
`

export const Footer = styled.View`
  padding: 0 20px;
  width: 100%;
  min-height: 120px;
  margin-top: 40px;
  justify-content: space-between;
`
