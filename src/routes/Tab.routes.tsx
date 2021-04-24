import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import useTheme from '../hooks/useTheme';
import PlantSelect from '../screens/PlantSelect';
import MyPlants from '../screens/MyPlants';

const AppTab = createBottomTabNavigator();

function AuthRoutes () {
  const { colors } = useTheme()

  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 88
        }
      }}
    >
      <AppTab.Screen 
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon 
              name="add-circle-outline" 
              size={size} 
              color={color} 
            />
          )
        }}
      />
      <AppTab.Screen 
        name="Minhas plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon 
              name="format-list-bulleted" 
              size={size} 
              color={color} 
            />
          )
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes

