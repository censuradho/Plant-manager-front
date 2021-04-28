import styled from 'styled-components/native'

interface Props {
  width?: number
}

export const Container = styled.View<Props>`
  width: ${props => !!props.width && props.width > 80 ? `${props.width}px` : '80px'};
  height: ${props => !!props.width && props.width > 80 ? `${props.width}px` : '80px'};
  border-radius: ${props => !!props.width ? `${props.width / 2}px` : '40px'};
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.shape};
`

export const Initials = styled.Text`
  font-size: 28px;
  font-family: ${props => props.theme.fonts.heading};
  text-transform: uppercase;
`