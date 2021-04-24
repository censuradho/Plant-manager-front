import AsyncStorage from '@react-native-async-storage/async-storage'

import { setNotification, removeNotification } from './notification'

export interface Plant {
  id: 1,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  },
  dateTimeNotification: Date,
  notificationId: string
}

export interface StoragePlant {
  [id: string]: {
    data: Plant
  }
}

export async function savePlant (plant: Plant) {
  
  try {
    const notificationId = await setNotification({
      nextTime: plant.dateTimeNotification,
      repeat_every: plant.frequency.repeat_every,
      times: plant.frequency.times,
      plant
    })

    const data = await AsyncStorage.getItem('@platmanager:user')
    const storagedPlants = data ? JSON.parse(data)  as StoragePlant : {}

    const newPlant = {
      [plant.id]: { 
        data: plant,
        notificationId
      }
    }
    
    const save = {
      ...storagedPlants, 
      ...newPlant,
    }
    
    await AsyncStorage.setItem('@platmanager:user', JSON.stringify(save))
    
    return save
  } catch (err) {
    throw new Error(err)
  }
}

export async function loadPlant () {
  try {

    const data = await AsyncStorage.getItem('@platmanager:user')
    const storagedPlants = data ? (JSON.parse(data) as StoragePlant) : {}

    const plants: Plant[] = Object
      .keys(storagedPlants)
      .map(plant => ({
        ...storagedPlants[plant].data
      }))
      .sort((a, b) => 
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000))
        )

      return plants

  } catch (err) {
    throw new Error(err)
  }
}

export async function deletePlant (id: number) {
  try {
    const data = await AsyncStorage.getItem('@platmanager:user')
    const storagedPlants = data ? (JSON.parse(data) as StoragePlant) : {}
    
    await removeNotification(storagedPlants[id].data.notificationId)
    delete storagedPlants[id]
    await AsyncStorage.setItem('@platmanager:user', JSON.stringify(storagedPlants))
    return storagedPlants
  } catch (err) {
    console.log(err)
  }
}



