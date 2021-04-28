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
}

export interface StoragePlant {
  [user_id: string]: {
    [id: string]: {
      data: Plant,
      notificationId: string
    }
  }
}

export interface User {
  id: string,
  username: string,
  user_image?: string,
  email: string,
  password: string
}

export interface Account {
  email: string,
  user_image?: string,
  username: string,
}

export interface SotrageUser {
  [id: string]: {
    data: User
  }
}

export interface Config {
  is_returned?: boolean,
  theme?: string
}

export async function loadPlant (user_id: string) {
  try {

    const data = await AsyncStorage.getItem('@platmanager:plants')
    const storagedPlants = data ? (JSON.parse(data) as StoragePlant) : {}

      return storagedPlants

  } catch (err) {
    throw new Error(err)
  }
}

export async function savePlant (user_id: string, plant: Plant) {
  try {
    const notificationId = await setNotification({
      nextTime: plant.dateTimeNotification,
      repeat_every: plant.frequency.repeat_every,
      times: plant.frequency.times,
      plant
    })

    const storagedPlants = await loadPlant(user_id)

    const newPlant = {
      [plant.id]: { 
        data: plant,
        notificationId
      }
    }
    
    const save = storagedPlants ? ({
      ...storagedPlants, 
      [user_id]: {
        ...storagedPlants?.[user_id],
        ...newPlant,
      }
    }) : ({
        [user_id]: newPlant
    })
    
    await AsyncStorage.setItem('@platmanager:plants', JSON.stringify(save))
    
    return save
  } catch (err) {
    throw new Error(err)
  }
}

export async function deletePlant (user_id: string, plant_id: number) {
  try {
    const storagedPlants = await loadPlant(user_id)
    console.log(storagedPlants)
    await removeNotification(storagedPlants?.[user_id]?.[plant_id]?.notificationId)  

    delete storagedPlants[user_id][plant_id]
    await AsyncStorage.setItem('@platmanager:plants', JSON.stringify(storagedPlants))
    return storagedPlants
  } catch (err) {
    console.log(err)
  }
}

export async function loadUsers () {
  try {
    
    const data = await AsyncStorage.getItem('@platmanager:user')
    const storagedUsers = data ? (JSON.parse(data) as SotrageUser) : undefined

    if (!storagedUsers) return []

    const users: User[] = Object
      .keys(storagedUsers)
      .map(user => ({
        ...storagedUsers[user].data
      }))

      return users

  } catch (err) {
    throw new Error(err)
  }
}

export async function saveUser (user: Partial<User>) {
  if (!user.id) throw new Error('id is required')

  const data = await AsyncStorage.getItem('@platmanager:user')
  const storagedUsers = data ? (JSON.parse(data) as SotrageUser) : undefined


  const newUser = {
    [user.id]: { data: user }
  }


  if (storagedUsers) {
    const save = {
      ...storagedUsers.users, 
      ...newUser,
    }
    
    await AsyncStorage.setItem('@platmanager:user', JSON.stringify(save))
    
    return user
  }

  const save = {
    users: { ...newUser }
  }

  await AsyncStorage.setItem('@platmanager:user', JSON.stringify(save))
  
  return user
}

export async function loadCurrentUser () {
  try {
    const data = await AsyncStorage.getItem('@platmanager:account')
    const storageAccount = data ? (JSON.parse(data) as Account) : undefined
    
    return storageAccount
  } catch (err) {
    throw new Error(err)
  }
}

export async function saveCurrentUser (account: Account) {
  try {
    const storagedUData = await loadCurrentUser()
    
    const currentAccount = {
      ...storagedUData,
      ...account
    }

    await AsyncStorage.setItem('@platmanager:account', JSON.stringify(currentAccount))
    
  } catch (err) {
    throw new Error(err)
  }
}



export async function desconectCurrentUser () {
  try {
    const data = await AsyncStorage.getItem('@platmanager:user')
    const storageAccount = data ? (JSON.parse(data) as Account) : undefined
    
    await AsyncStorage.setItem('@platmanager:user', JSON.stringify({
      ...storageAccount,
      account: {}
    }))

  } catch (err) {
    throw new Error(err)
  }
}



export async function loadConfig() {
  try {
    const data = await AsyncStorage.getItem('@platmanager:config')
    const storageConfig = data ? (JSON.parse(data) as Config) : {}
    return storageConfig
  } catch (err) {
    throw new Error(err)
  }
}

export async function saveConfig(config: Partial<Config>) {
  try {

    const storageConfig = await loadConfig()
  
    const newConfig = {
      ...storageConfig,
      ...config
    }
  
    await AsyncStorage.setItem('@platmanager:config', JSON.stringify(newConfig))
    return newConfig
  } catch (err) {
    throw new Error(err)
  }
}