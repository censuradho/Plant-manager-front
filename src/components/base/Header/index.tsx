import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import * as Styles from './styles'

function Header () {
  const [username, setUsername] = useState('')

  const getUserInfo = async () => {
    const user = await AsyncStorage.getItem('@platmanager:user')
    if (!user) return;

    const data = JSON.parse(user)

    setUsername(data.username)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Styles.Container>
      <View>
        <Styles.Strong>Olá,</Styles.Strong>
        <Styles.Username>{username}</Styles.Username>
      </View>
      <Styles.Image source={require('../../../assets/perfil.jpeg')} />
    </Styles.Container>
  )
}

export default Header
