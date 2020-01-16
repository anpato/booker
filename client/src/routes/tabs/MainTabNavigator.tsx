import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AppointmentStack from '../stacks/AppointmentStack'
import MessagesStack from '../stacks/MessagesStack'
import { Primary, Disabled } from '../../styles/Colors'
import HomeStack from '../stacks/HomeStack'
import SearchStack from '../stacks/SearchStack'

export default createBottomTabNavigator(
  {
    HomeStack: HomeStack,
    SearchStack: SearchStack,
    AppointmentStack: AppointmentStack,
    MessageStack: MessagesStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Ionicons
        let iconName: string
        switch (routeName) {
          case 'HomeStack':
            iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home'
            break
          case 'SearchStack':
            iconName = Platform.OS === 'ios' ? 'ios-search' : 'md-search'
            break
          case 'AppointmentStack':
            iconName = Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'
            break
          case 'MessageStack':
            iconName = Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'
            break
        }
        return <IconComponent name={iconName} size={32} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: Primary,
      inactiveTintColor: Disabled,
      showLabel: false
    }
  }
)
