import React, { useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import { addNotificationResponseReceivedListener } from 'expo-notifications'

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import Routes from './src/routes'

import Theme from './src/theme'

export default function App() {
  const [isfontLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = addNotificationResponseReceivedListener(
      async ({ notification }) => {
        const data = notification.request.content.data.plant
      }
    )
        
    return subscription.remove()
  }, [])

  if (!isfontLoaded) {
    return <AppLoading />
  }

  return (
    <Theme>
      <Routes />
    </Theme>

  )
}

