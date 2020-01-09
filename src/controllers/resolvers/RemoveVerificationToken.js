import { VerifcationToken } from '../../database/Schema'

export const RemoveVerificationToken = async (req, res) => {
  await VerifcationToken.deleteOne({ _id: res.locals.token._id })
  res.send({ message: 'Account Verified' })
}
