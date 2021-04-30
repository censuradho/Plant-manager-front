import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Configurations from '../screens/Configurations'
import Theme from '../screens/Configurations/Theme'

const StackNavigation = createStackNavigator()

function ConfigRoutes () {
  return (
    <StackNavigation.Navigator 
      headerMode="none"
      screenOptions={{
        title: 'Configurações',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >

      <StackNavigation.Screen 
        name="Configurations"  
        component={Configurations} 
      />
      <StackNavigation.Screen 
        name="Theme"
        component={Theme}
      />

    </StackNavigation.Navigator>
  )
}

export default ConfigRoutes