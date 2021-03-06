import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInput as TextInputComponent, TextInputFocusEventData,  } from 'react-native'
import { useTheme } from 'styled-components'

import * as Styles from './styles'

interface Props extends React.ComponentProps<typeof TextInputComponent> {
  isError?: boolean,
  errorText?: string
}

function TextInput ({onFocus, onBlur, isError, errorText, ...props}: Props) {
  const [isFocus, setIsFocus] = useState(false)
  const [isBlur, setIsBlur] = useState(false)
  const { colors } = useTheme()

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
        {...props}
        isBlur={isBlur}
        isFocus={isFocus}
        onBlur={handleBlur}
        onFocus={handleFoucus}
        placeholderTextColor={colors.heading}
      />
      <Styles.Label>{errorText}</Styles.Label>
    </Styles.Container>
  )
}

export default React.memo(TextInput)
