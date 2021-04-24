import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackRoutes from './stack.routes'

function RootRoutes () {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}

export default RootRoutes

