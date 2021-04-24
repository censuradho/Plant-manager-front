import  styled from 'styled-components/native'

interface BoxProps {
  justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end',
  row?: boolean
}

export const Box = styled.View<BoxProps>`
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.row ? 'row' : 'column'}
`
