import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.shape}; 
  margin: 5px 0;
`

export const Title = styled.Text`
  flex: 1;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  margin-left: 10px; 
  font-size: 17px;
`

export const Image = styled(SvgFromUri)`
  width: 70px;
  height: 70px;
`

export const Details = styled.View`
  align-items: flex-end;
`
export const Timelabel = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.body_light};
`

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.body_dark};
`

export const RemoveButton = styled(RectButton)`
  width: 100px;
  height: 85px;
  background: ${props => props.theme.colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px

`