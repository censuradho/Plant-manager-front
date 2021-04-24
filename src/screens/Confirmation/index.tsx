import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { SafeAreaView } from 'react-native'

import  Button from '../../components/base/Button'

import * as Styles from './styles'

interface Params {
  title: string,
  subtitle: string,
  buttonTitle: string,
  icon: 'smile' | 'hug',
  nextScreen: string,
}

const emojins = {
  smile: '😁',
  hug: '🤗'
}

function Confirmation () {
  const navigation = useNavigation()
  const route = useRoute()

  const { 
    buttonTitle,
    icon,
    nextScreen,
    subtitle,
    title
  } = route.params as Params
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Styles.Container>
        <Styles.Emoji>{emojins[icon]}</Styles.Emoji>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Body>{subtitle}</Styles.Body>
        <Styles.Footer>
          <Button fill onPress={() => navigation.navigate(nextScreen)}>{buttonTitle}</Button>
        </Styles.Footer>
      </Styles.Container>
    </SafeAreaView>
  )
}

export default Confirmation
