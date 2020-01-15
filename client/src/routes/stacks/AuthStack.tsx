import { createStackNavigator } from 'react-navigation-stack'
import SignIn from '../../views/auth/SignIn'
import Register from '../../views/auth/Register'
export default createStackNavigator(
  {
    signIn: {
      screen: SignIn,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        headerBackTitle: 'Back',

        headerBackTitleStyle: {
          color: '#333'
        },
        headerTintColor: '#333',
        headerTitle: 'Register'
      })
    }
  },
  {}
)
