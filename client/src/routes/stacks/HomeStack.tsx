import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Text } from 'react-native'
import Home from '../../views/App/Home/Home'
import { GlobalStyles } from '../../styles/GlobalStyle'
import { Primary } from '../../styles/Colors'

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `Welcome Back ${navigation.state.params?.user_name ?? 'User'}`,
        headerTitleAlign: 'left',
        headerTitleStyle: GlobalStyles.headerText
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: GlobalStyles.header,
      cardStyle: GlobalStyles.navigationCard
    }
  }
)
