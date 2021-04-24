import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInputProps, TextInputFocusEventData } from 'react-native'

import * as Styles from './styles'

type NativeProps = Omit<TextInputProps, ''>

interface Props extends NativeProps {
  isError?: boolean,
  errorText?: string
}

function TextInput ({onFocus, onBlur, ...props}: Props) {
  const [isFocus, setIsFocus] = useState(false)
  const [isBlur, setIsBlur] = useState(false)

  const handleFoucus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true)
    setIsBlur(false)
    onFocus?.(event)
  }

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false)
    setIsBlur(true)
    onBlur?.(event)
  }

  return (
    <Styles.Container>
      <Styles.Input
        isBlur={isBlur}
        isFocus={isFocus}
        onBlur={handleBlur}
        onFocus={handleFoucus}
        {...props}

      />
      <Styles.Label>{props?.errorText}</Styles.Label>
    </Styles.Container>
  )
}

export default React.memo(TextInput)
