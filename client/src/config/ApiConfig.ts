import Axios from 'axios'
import { getToken } from '../services/TokenServices'

export const Api = Axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

Api.interceptors.request.use(
  async config => {
    const token: string = await getToken()
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)
