import { StyleSheet } from 'react-native'
import { White, Primary } from './Colors'

export const GlobalStyles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular'
  },
  headerText: {
    fontFamily: 'OpenSans-Bold',
    letterSpacing: 0.8,
    color: Primary
  },
  header: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: White
  },
  navigationCard: {
    backgroundColor: White
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
