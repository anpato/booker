import { User } from '../../database/Schema'
import { ErrorHandler } from '../../middleware/error'
export const RemoveUserFromDb = async (id, res) => {
  await User.deleteOne({ _id: id })
  throw new ErrorHandler(401, 'Token Has Expired')
}
