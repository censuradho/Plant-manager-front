import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { useFocusEffect } from '@react-navigation/native'

import { StatusBar, Alert, ScrollView } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import Button from '../../components/base/Button'
import useTheme from '../../hooks/useTheme'
import DateTimerPicker, { Event } from '@react-native-community/datetimepicker'
import { isBefore, format } from 'date-fns'

import * as Styles from './styles'

import { Plant, savePlant } from '../../libs/storage'

interface Params {
  plant: Plant
}

function PlantSave () {
  const { colors } = useTheme()
  const route = useRoute()
  const navigation = useNavigation()

  const { plant } = route.params as Params

  const [selectedDateTime, setSelectDateTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (event: Event, datetime: Date | undefined) => {
    setIsVisible(prevState => !prevState)

    if (!datetime) return;

    if (datetime && isBefore(datetime, new Date())) {
      setSelectDateTime(new Date())
      return Alert.alert('Não é possível agendar em que já passaram.')
    }

    setSelectDateTime(datetime)
  }

  const handleSave = async () => {

    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      
      navigation.navigate('Confirmation', {
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
      })

    } catch (err) {
      console.log(err )
      if (err === 'Planta já cadastrada') {
        Alert.alert('Planta já cadastrada')
        return
      }



      Alert.alert('Não foi possível salvar.')
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      setSelectDateTime(new Date())
    }, [])
  )

  return (
    <ScrollView 
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor={colors.shape} />
      <Styles.Container>
        <Styles.PlantInfo>
          <SvgFromUri uri={plant.photo} width={150} height={150} />
          <Styles.PlantName>{plant.name}</Styles.PlantName>
          <Styles.PlantAbout>{plant.about}</Styles.PlantAbout>
        </Styles.PlantInfo>
        <Styles.Controllers>
          <Styles.TipContainer>
            <Styles.TipImage source={require('../../assets/waterdrop.png')} />
            <Styles.TipText>{plant.water_tips}</Styles.TipText>
          </Styles.TipContainer>
          <Styles.AlertLabel>Escolha o melhor horário para ser lembrado.</Styles.AlertLabel> 
          {isVisible && (
            <DateTimerPicker 
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChange}
            />
          )}
          <Styles.DateTImerPickerButton onPress={() => setIsVisible(prevState => !prevState)}>
            <Styles.DateTimePickerText>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</Styles.DateTimePickerText>
          </Styles.DateTImerPickerButton>
          <Button onPress={handleSave}>Cadastrar planta</Button>
        </Styles.Controllers>
      </Styles.Container>
    </ScrollView>
  )
}

export default PlantSave
