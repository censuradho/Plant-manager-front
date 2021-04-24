import styled from 'styled-components/native'

interface Props {
  isFocus?: boolean,
  isBlur?: boolean
}

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.text};
  font-size: 16px;
  color: ${props => props.theme.colors.red};
  margin-top: 10px;
`

export const Input = styled.TextInput<Props>`
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.isFocus ? props.theme.colors.green : props.theme.colors.gray};
  color: ${props => props.theme.colors.heading};
  width: 100%;
  font-size: 18px;
  padding: 10px;
  text-align: center;
`

export const Container = styled.View<{ isError?: boolean }>`
  width: 100%;
  ${Label} {
    opacity: ${props => props.isError ? 1 : 0};
  }

`