import { DATABASE_URI, DEVELOP_URI, NODE_ENV } from '../env'
export const db = () => {
  if (NODE_ENV === 'production') {
    return {
      name: 'Production',
      connection: DATABASE_URI
    }
  } else {
    return {
      name: 'Development',
      connection: DEVELOP_URI
    }
  }
}
