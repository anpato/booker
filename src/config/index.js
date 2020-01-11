import { DATABASE_URI, DEVELOP_URI, NODE_ENV } from '../env'
export const db = () => {
  switch (NODE_ENV) {
    case 'production':
      return {
        name: 'Booker Production',
        connection: DATABASE_URI
      }
    default:
      return {
        name: 'Booker Development',
        connection: DEVELOP_URI
      }
  }
}
