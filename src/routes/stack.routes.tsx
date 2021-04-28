import React, { useEffect, useState } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import useTheme from '../hooks/useTheme'
import Welcome from '../screens/Welcome'
import UserIdentification from '../screens/UserIdentification'
import Confirmation from '../screens/Confirmation'
import PlantSave from '../screens/PlantSave'
import AuthRoutes from './Tab.routes'
import UserPhoto from '../screens/UserPhoto'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import Login from '../screens/Login'

import { loadConfig } from '../libs/storage'
import useCurrentUser from '../hooks/useCurrentUser'
import Perfil from '../screens/Perfil'
import useConfig from '../hooks/useConfig'

const stackRoutes = createStackNavigator()

function AppRoutes () {
  const { colors } = useTheme()
  const { config } = useConfig()
  const { currentUser } = useCurrentUser()

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
      {config && !config?.is_returned && <stackRoutes.Screen name="Welcome" component={Welcome} />}
      <stackRoutes.Screen name="SignIn" component={SignIn} />
      <stackRoutes.Screen name="SignUp" component={SignUp} />
      <stackRoutes.Screen name="Login" component={Login} />
      <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="UserPhoto" component={UserPhoto} />
      <stackRoutes.Screen name="PlantSave" component={PlantSave} />
      <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
      <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
      <stackRoutes.Screen name="Perfil" component={Perfil} options={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }} />
    </stackRoutes.Navigator>
  )
}

export default AppRoutes
