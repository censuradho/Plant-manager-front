import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as Styles from './styles'

interface Props extends RectButtonProps {
  children: React.ReactNode,
  active?: boolean,
}

function EnvButton ({children, active, ...props}: Props) {
  return (
    <Styles.Container active={active} {...props}>
      <Styles.Text active={active}>
        {children}
      </Styles.Text>
  </Styles.Container>
  )
}

export default EnvButton
