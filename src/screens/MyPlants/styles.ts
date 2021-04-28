import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0 30px;
  background-color: ${props => props.theme.colors.background};
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export const SpotLight = styled.View`
  margin-top: 20px;
  background: ${props => props.theme.colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`

export const SpotLightText = styled.Text`
  color: ${props => props.theme.colors.blue};
  flex: 1;
  text-align: justify;
   padding: 0 20px;
`

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`

export const PlantsTitle = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.heading}; 
  font-family: ${props => props.theme.fonts.heading};
  margin: 20px  0px;
`

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`

export const EmptyText = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.heading}; 
  font-family: ${props => props.theme.fonts.text};
  text-align: center;
`

export const EmptyImage = styled.Image`
  width: 248.72px;
  height: 233.06px
`