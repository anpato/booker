import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Messages from '../../views/App/Messaging/Messages'
import Chat from '../../views/App/Messaging/Chat'
import { GlobalStyles } from '../../styles/GlobalStyle'
import { CreateMessage } from '../../shared'
import { Ionicons } from '@expo/vector-icons/'
import { Platform } from 'react-native'
import { Primary } from '../../styles/Colors'

export default createStackNavigator(
  {
    Messages: {
      screen: Messages,
      navigationOptions: ({ navigation }) => ({
        headerRightContainerStyle: {
          marginRight: 20
        },
        headerStyle: GlobalStyles.header,
        headerRight: () => (
          <CreateMessage onPress={() => navigation.navigate('Chat')}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
              color={Primary}
              size={32}
            />
          </CreateMessage>
        )
      })
    },
    Chat: {
      screen: Chat,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params?.header ?? 'Chat'}`,
        cardOverlayEnabled: true,
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5
        }
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      cardStyle: GlobalStyles.navigationCard,
      headerTitleStyle: GlobalStyles.headerText,
      headerTintColor: Primary,
      headerBackTitleStyle: {
        color: Primary
      }
    })
  }
)
