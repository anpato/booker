import React, { useState } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { fetchFonts } from './src/utils/Fonts'
import { AppLoading } from 'expo'

import AuthStack from './src/routes/stacks/AuthStack'
import Authenticate from './src/views/auth/Authenticate'
import MainTabNavigator from './src/routes/tabs/MainTabNavigator'

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Authenticate: Authenticate,
    AuthStack: AuthStack,
    App: MainTabNavigator
  })
)
export default function App() {
  const [isAppLoaded, appLoaded] = useState(false)
  if (!isAppLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => appLoaded(true)} />
    )
  }

  return <AppContainer />
}
