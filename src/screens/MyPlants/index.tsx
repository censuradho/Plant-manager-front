import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import Header from '../../components/base/Header'
import PlantCardSecundary from '../../components/PlantCardSecundary'
import Loader from '../../components/base/Loader'

import { Plant, loadPlant, deletePlant } from '../../libs/storage'

import * as Styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { Alert } from 'react-native'

function MyPlants () {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWaterd, setNextWarted] = useState<string>()

  const handleLoadStorage = async () => {
    try {
      const plantStorage = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantStorage[0].dateTimeNotification).getTime(), 
        new Date().getTime(),
        { locale: pt }
      )
  
      setNextWarted(`Não esqueça de regar a ${plantStorage[0].name} às ${nextTime}.`)
      setPlants(plantStorage)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleRemove = async (plant: Plant) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim',  onPress: async () => {
        try {
          await deletePlant(plant.id)
          setPlants(prevState => prevState.filter(value => value.id !== plant.id))
        } catch (err) {
          Alert.alert('Não foi possível remover!')
        }
      }}
    ])
  }

  useEffect(() => {
    handleLoadStorage()
  }, [])

  if (loading) return <Loader />
 
  return (
    <Styles.Container>
      <Header />
      <Styles.SpotLight>
        <Styles.SpotLightImage source={require('../../assets/waterdrop.png')} />
        <Styles.SpotLightText>{nextWaterd}</Styles.SpotLightText>
      </Styles.SpotLight>
      <Styles.Plants>
        <Styles.PlantsTitle>Pŕoximas regadas</Styles.PlantsTitle>
        <Styles.ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={plants}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PlantCardSecundary 
                data={item}
                handleRemove={() => handleRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1}}
          />
        </Styles.ScrollView>
      </Styles.Plants>
    </Styles.Container>
  )
}

export default MyPlants
