import { Api } from '../config/ApiConfig'
import { setToken } from './TokenServices'

export const LoginUser = async (credentials: any) => {
  try {
    const resp = await Api.post('/auth/login', credentials)
    await setToken(resp.data.token)
    return resp
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (credentials: any) => {
  try {
    const resp = await Api.post('/auth/register', credentials)
    return resp
  } catch (error) {
    throw error
  }
}
