import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${props => props.theme.colors.shape};
`

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.shape};
`

export const PlantName = styled.Text`
  font-size: 24px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
`
export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.heading};
  font-size: 17px;
  margin-top: 10px;
`

export const Controllers = styled.View`
  background: ${props => props.theme.colors.white};
  padding: 20px;

`

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.blue};
  text-align: justify;
`

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.complement};
  color: ${props => props.theme.colors.heading};
  margin-bottom: 5px;
`

export const DateTimePickerText = styled.Text`

  color: ${props => props.theme.colors.heading};
  font-size: 24px;
  font-family: ${props => props.theme.fonts.text};
`

export const DateTImerPickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;

`