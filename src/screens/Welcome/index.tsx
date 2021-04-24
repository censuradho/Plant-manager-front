import React from 'react'
import  { StatusBar, Dimensions, Image, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MaterialIcons as Icon } from '@expo/vector-icons'

import * as Styles from './styles'

import Button from '../../components/base/Button'

import wateringImg from '../../assets/watering.png'
import { useNavigation } from '@react-navigation/core'

function Welcome () {
  const navigation = useNavigation()

  const getUser = async () => {
    // const userString = await AsyncStorage.getItem('@platmanager:user')

    // const user = userString ? JSON.parse(userString) : {}

    // if (!user?.username) return navigation.navigate('UserIdentification')

    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar backgroundColor="transparent" networkActivityIndicatorVisible barStyle="dark-content" />
    <Styles.Container>
      <Styles.Title>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Styles.Title>
      <Image 
        source={wateringImg} 
        style={{ height: Dimensions.get('window').width * .7 }}
        resizeMode="contain"
      />
      <Styles.Text>Não se esqueça mais de regar suas plantas. Nós cuidamos de lembrar sempre que precisar.</Styles.Text>
      <Button onPress={getUser}>
        <Icon name="arrow-forward-ios" size={20} />
      </Button>
    </Styles.Container>
    </SafeAreaView>
  )
}

export default Welcome
