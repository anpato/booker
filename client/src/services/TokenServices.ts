import { AsyncStorage } from 'react-native'

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token')
  return token
}

export const setToken = async (token: string) => {
  await AsyncStorage.setItem('token', token)
}

export const clearToken = async () => {
  await AsyncStorage.clear()
}
