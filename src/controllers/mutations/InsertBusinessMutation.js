import { Business } from '../../database/Schema'

export const InsertBusinessesMutation = async businesses => {
  const newBusinesses = await Business.insertMany(businesses)
  return newBusinesses
}
