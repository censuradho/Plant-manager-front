import { createStackNavigator } from '@react-navigation/stack'

import Configurations from '../screens/Configurations'

const StackNavigation = createStackNavigator()

function ConfigRoutes () {
  return (
    <StackNavigation.Navigator 
      headerMode="float"
      screenOptions={{
        title: 'Configurações',
      }}
    >
      <StackNavigation.Screen 
        name="Configurations"  
        component={Configurations} 
      />
    </StackNavigation.Navigator>
  )
}

export default ConfigRoutes