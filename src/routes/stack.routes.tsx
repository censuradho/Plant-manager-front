import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import useTheme from '../hooks/useTheme'
import Welcome from '../screens/Welcome'
import UserIdentification from '../screens/UserIdentification'
import Confirmation from '../screens/Confirmation'
import PlantSave from '../screens/PlantSave'
import AuthRoutes from './Tab.routes'
import UserPhoto from '../screens/UserPhoto'

const stackRoutes = createStackNavigator()

function AppRoutes () {
  const { colors } = useTheme()

  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="UserPhoto" component={UserPhoto} />
      <stackRoutes.Screen name="PlantSave" component={PlantSave} />
      <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
      <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
    </stackRoutes.Navigator>
  )
}

export default AppRoutes
