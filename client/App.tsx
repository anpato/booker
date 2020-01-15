import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthStack from './src/routes/stacks/AuthStack'
import { fetchFonts } from './src/utils/Fonts'
import { AppLoading } from 'expo'
const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthStack: AuthStack
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
