import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { SafeAreaView } from 'react-native'

import  Button from '../../components/base/Button'

import * as Styles from './styles'

interface Params {
  title: string,
  subtitle?: string,
  buttonTitleTop: string,
  buttonTitleBottom?: string
  icon: 'smile' | 'hug' | 'self',
  nextScreenTop: string,
  nextScreenBottom?: string
}

const emojins = {
  smile: '😁',
  hug: '🤗',
  self: '🤳'
}

function Confirmation () {
  const navigation = useNavigation()
  const route = useRoute()
  
  const { 
    buttonTitleTop,
    buttonTitleBottom,
    icon,
    nextScreenTop,
    nextScreenBottom,
    subtitle,
    title
  } = route.params as Params
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Styles.Container>
        <Styles.Emoji>{emojins[icon]}</Styles.Emoji>
        <Styles.Title>{title}</Styles.Title>
        {subtitle && <Styles.Body>{subtitle}</Styles.Body>}
        <Styles.Footer>
          <Button fill onPress={() => navigation.navigate(nextScreenTop)}>{buttonTitleTop}</Button>
          {nextScreenBottom && (
            <Button 
              fill
              stroke 
              onPress={() => navigation.navigate(nextScreenBottom)}
            >{buttonTitleBottom}</Button>
          )}
        </Styles.Footer>
      </Styles.Container>
    </SafeAreaView>
  )
}

export default Confirmation
