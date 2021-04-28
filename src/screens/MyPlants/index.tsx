import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import Header from '../../components/base/Header'
import PlantCardSecundary from '../../components/PlantCardSecundary'
import Loader from '../../components/base/Loader'

import { Plant } from '../../libs/storage'

import * as Styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import usePlant from '../../hooks/usePlant'

function MyPlants () {
  const user = useSelector(value => value.user)
  const { plants, deletePLant, isLoading, getPlants } = usePlant()
  const [loading, setLoading] = useState(true)
  const [nextWaterd, setNextWarted] = useState<string>('')

  const handleLoadStorage = async () => {
    try {
      const nextTime = formatDistance(
        new Date(plants[0].dateTimeNotification).getTime(), 
        new Date().getTime(),
        { locale: pt }
      )
  
      setNextWarted(`Não esqueça de regar a ${plants[0].name} em ${nextTime}.`)
    } catch (err) {
      console.log(err)
      setNextWarted('')
    }
  }

  const handleRemove = async (plant: Plant) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim',  onPress: async () => {
        try {
          await deletePLant(plant.id)
          setNextWarted('')
        } catch (err) {
          Alert.alert('Não foi possível remover!')
        }
      }}
    ])
  }

  useEffect(() => {
    handleLoadStorage()
  }, [plants])

  if (isLoading) return <Loader />
 
  return (
    <Styles.Container>
      <Header />
      {!!nextWaterd && (
        <Styles.SpotLight>
          <Styles.SpotLightImage source={require('../../assets/waterdrop.png')} />
          <Styles.SpotLightText>{nextWaterd}</Styles.SpotLightText>
        </Styles.SpotLight>
      )}
      <Styles.Plants>
        {plants.length > 0 ? (
          <>
            <Styles.PlantsTitle>Pŕoximas regadas</Styles.PlantsTitle>
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
              refreshing={isLoading}
              onRefresh={() => getPlants(user.id)}
            />
          </>
        ) : (
          <Styles.EmptyContainer>
            <Styles.EmptyImage resizeMethod="scale" source={require('../../assets/empty.png')} />
            <Styles.EmptyText>Você ainda não tem uma plantinha para regar.</Styles.EmptyText>
          </Styles.EmptyContainer>
        )}
      </Styles.Plants>
    </Styles.Container>
  )
}

export default MyPlants
