import { createStackNavigator } from 'react-navigation-stack'
import Messages from '../../views/App/Messaging/Messages'
import { GlobalStyles } from '../../styles/GlobalStyle'
import Search from '../../views/App/Search/Search'

export default createStackNavigator(
  {
    SearchHome: {
      screen: Search,
      navigationOptions: {
        title: 'Search'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: GlobalStyles.header,
      cardStyle: GlobalStyles.navigationCard,
      headerTitleStyle: GlobalStyles.headerText
    }
  }
)
