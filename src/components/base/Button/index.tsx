import React from 'react'
import {TouchableOpacityProps, } from 'react-native'

import * as Styles from './styles'

type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity' | 'style'>

interface Props  extends ButtonProps {
  children: React.ReactNode,
  fill?: boolean,
  stroke?: boolean,
}

function Button ({children, ...props}: Props) {
  console.log(props.stroke, props.fill)
  return (
    <Styles.Button 
      activeOpacity={.7}
      {...props}
    >
      <Styles.Text stroke={props.stroke}>
        {children}
      </Styles.Text>
    </Styles.Button>
  )
}

export default React.memo(Button)
