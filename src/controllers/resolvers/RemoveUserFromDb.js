import { User } from '../../database/Schema'

export const RemoveUserFromDb = async (id, res) => {
  await User.deleteOne({ _id: id })
  res.status(401).json({ msg: 'Token Has expired, please sign up again.' })
}
