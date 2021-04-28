import React, { useEffect, useState } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { useSelector } from 'react-redux'

import useInitials from '../../../hooks/useInitials'

import * as Styles from './styles'
import { useNavigation } from '@react-navigation/core'

function Header () {
  const user = useSelector(value => value.user)
  const navigation = useNavigation()

  const { initials } = useInitials('Usuário')

  return (
    <Styles.Container>
      <View>
        <Styles.Strong>Olá,</Styles.Strong>
        <Styles.Username>{user.username}</Styles.Username>
      </View>
      <TouchableWithoutFeedback onLongPress={() => navigation.navigate('Perfil')}>
        {user.user_image ? (
            <Styles.Image source={{ uri: user.user_image}} />
        ) : (
          <Styles.InitialContainer>
            <Styles.Initials>{initials}</Styles.Initials>
          </Styles.InitialContainer>
        )}
      </TouchableWithoutFeedback>
    </Styles.Container>
  )
}

export default Header
