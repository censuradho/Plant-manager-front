import React from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 
import { StackActions, useNavigation  } from '@react-navigation/core';
import { useDispatch } from 'react-redux'
import { Alert } from 'react-native'

import * as Styles from './styles'

import useTheme  from '../../hooks/useTheme'

import {  desconectCurrentUser } from '../../libs/storage'

import { logOff } from '../../store/ducks/user/actions'

function Configurations () {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const navigation = useNavigation()

  const exit = () => {
    Alert.alert('Quer mesmo sair?', '', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      { 
        text: 'Sair',
        onPress: () => {
          navigation.dispatch(StackActions.replace('Login'))    
        }
      }
    ])

  }
  const desconnect = () => {
    Alert.alert('Quer mesmo desconectar sua conta?', '', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      { 
        text: 'sim',
        onPress: () => {
          desconectCurrentUser()
          dispatch(logOff())
          navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn'}]
          })
        }
      }
    ])

  }

  return (
    <Styles.Container>
      <Styles.Title>Configurações</Styles.Title>
      <Styles.Hr />
      <Styles.Button onPress={() => navigation.navigate('Theme')}>
        <MaterialIcons name="color-lens" size={24} color={colors.heading} />
        <Styles.Label>Tema</Styles.Label>
      </Styles.Button>
      <Styles.WarnButton onPress={exit}>
      <MaterialIcons name="exit-to-app" size={24} color={colors.heading} />
        <Styles.WarnText>Sair</Styles.WarnText>
      </Styles.WarnButton>
      <Styles.WarnButton onPress={desconnect}>
      <Entypo name="log-out" size={24} color={colors.heading} />
        <Styles.WarnText>Desconectar</Styles.WarnText>
      </Styles.WarnButton>
    </Styles.Container>
  )
}

export default Configurations
