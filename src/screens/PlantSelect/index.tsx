import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import queryString from 'querystring'

import EnvButton from '../../components/base/EnvButton'
import Header from '../../components/base/Header'
import Loader from '../../components/base/Loader'
import PlantCardPrimary from '../../components/PlantCardPrimary'

import api from '../../services/api'

import * as styles from './styles'
import useTheme from '../../hooks/useTheme'
import { useNavigation } from '@react-navigation/core'

import { Plant } from '../../libs/storage'

interface Environment {
  key: string,
  title: string
}


function PlantSelect () {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const [environments, setEnvironments] = useState<Environment[]>([])

  const [plants, setPlants] = useState<Plant[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])

  const [environmentActive, setEnvironmentActive] = useState('all')

  const [page, setPage] = useState(1)
  const [isLoadMore, setIsLoadMore] = useState(false)

  const [loading, setLoading] = useState(true)

  const getEnVironment = async () => {
    const filters = queryString.stringify({
      _sort: 'title',
      _order: 'asc'
    })

    const { data } = await api.get(`plants_environments?${filters}`)
    setEnvironments([
      { key: 'all', title: 'todos' },
      ...data
    ])
  }

  const getPlants = async () => {
    const filters = queryString.stringify({
      _sort: 'name',
      _order: 'asc',
      _page: page,
      _limit: 8
    })

    try {
      const { data } = await api.get(`plants?$${filters}`)

      if (!data) return;
      
      if (page > 1) {
        setPlants(prevState => ([...prevState, ...data]))
        setFilteredPlants(prevState => ([...prevState, ...data]))
  
      } else {
        setPlants(data)
        setFilteredPlants(data)
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
    setIsLoadMore(false)
  }

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentActive(environment)
    if (environment === 'all') return setFilteredPlants(plants)

    const filtered = plants.filter(plant => plant.environments.includes(environment))
    setFilteredPlants(filtered)
  }

  const handleLoadMore = (distance: number) => {
    if (distance > 1) return;

    setIsLoadMore(true)
    setPage(prevState => prevState + 1)
  }

  const handlePlantSelect = (plant: Plant) => {
    navigation.navigate('PlantSave', { plant })
  }

  useEffect(() => {
    getEnVironment()
  }, [])

  useEffect(() => {
    getPlants()
  },[page])

  if (loading) return <Loader />
  
  return (
    <styles.Container>
      <styles.WrapHeader>
        <Header />
        <styles.Title>Em qual ambiente</styles.Title>
        <styles.SubTitle>você quer colocar sua planta?</styles.SubTitle>
      </styles.WrapHeader>
      
      <View>
        <FlatList 
          data={environments}
          keyExtractor={item => String(item.key)}
          renderItem={({ item }) => (
            <EnvButton 
              key={item.key} 
              style={{ marginHorizontal: 5 }}
              active={item.key === environmentActive}
              onPress={() => handleEnvironmentSelected(item.key)} 
            >{item.title}</EnvButton>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleSheet.environmentList}
        />
      </View>
      <styles.Plants>
        <FlatList 
          data={filteredPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data={{ name: item.name, photo: item.photo }}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styleSheet.plantList}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleLoadMore(distanceFromEnd)}
          ListFooterComponent={isLoadMore ? <ActivityIndicator color={colors.green} /> : <></>}
        />
      </styles.Plants>
    </styles.Container>
  )
}
// 
const styleSheet = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingRight: 40,
    marginLeft: 32,
    marginHorizontal: 32
  },
  plantList: {
    justifyContent: 'center'
  }
})

export default PlantSelect
