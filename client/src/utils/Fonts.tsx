import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'

export const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Italic': require('../../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf')
  })
}
