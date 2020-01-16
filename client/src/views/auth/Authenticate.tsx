import React, { useEffect } from 'react'
import { View } from 'react-native'
import { getToken } from '../../services/TokenServices'

export default (props: any) => {
  const checkForToken = async () => {
    const token = await getToken()
    if (token) {
      return props.navigation.navigate('App')
    }
    return props.navigation.navigate('AuthStack')
  }
  useEffect(() => {
    checkForToken()
  }, [])
  return <View></View>
}
