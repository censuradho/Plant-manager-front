import React from 'react'
import {TouchableOpacityProps, } from 'react-native'

import * as Styles from './styles'

type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity' | 'style'>

interface Props  extends ButtonProps {
  children: React.ReactNode,
  fill?: boolean
}

function Button ({children, ...props}: Props) {
  return (
    <Styles.Button 
      activeOpacity={.7}
      {...props}
    >
      <Styles.Text>
        {children}
      </Styles.Text>
    </Styles.Button>
  )
}

export default React.memo(Button)
