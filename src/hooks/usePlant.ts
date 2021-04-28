import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Plant, savePlant as save, loadPlant, deletePlant as deleteP } from '../libs/storage'

function usePlant () {
  const [plants, setPlants] = useState<Plant[]>([])
  const user = useSelector(value => value.user)
  const [isLoading, setIsLoading] = useState(true)

  const getPlants = async (user_id: string) => {
    try {
      setIsLoading(true)
      const storagedPlants = await loadPlant(user_id)

      const plantSerialized: Plant[] = Object
      .keys(storagedPlants?.[user_id])
      .map(plant => ({
        ...storagedPlants[user_id][plant].data
      }))
      .sort((a, b) => 
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000))
        )
  
      setPlants(plantSerialized)
    } catch (err) {
      throw new Error(err)
    }
    setIsLoading(false)
  }

  const savePlant = async (user_id: string, plant: Plant) => {
    save(user_id, plant)
  }

  const deletePLant = async (plant_id: number) => {
    await deleteP(user.id, plant_id)
    await getPlants(user.id)
  }

  useEffect(() => {
    getPlants(user.id)
  }, [user])

  return { plants, getPlants, savePlant, isLoading, deletePLant }
}

export default usePlant
