import { createStackNavigator } from 'react-navigation-stack'
import AppointmentHome from '../../views/App/Appointments/AppointmentHome'
import { GlobalStyles } from '../../styles/GlobalStyle'
import { White } from '../../styles/Colors'

const AppointmentStack = createStackNavigator(
  {
    AppointmentHome: {
      screen: AppointmentHome,
      navigationOptions: {
        title: 'Appointments'
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

export default AppointmentStack
