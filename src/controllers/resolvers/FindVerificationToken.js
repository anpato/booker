import { VerifcationToken } from '../../database/Schema'
import { RemoveUserFromDb } from '../resolvers'

export const FindVerificationToken = async (req, res, next) => {
  const { user } = res.locals
  const token = await VerifcationToken.findOne({ user_id: user._id })
  if (user.isVerified) {
    return res.status(202).json({ msg: 'Account already verified' })
  } else if (!token && !user.isVerified) {
    await RemoveUserFromDb(req.params.user_id, res)
  } else {
    res.locals.token = token
    next()
  }
}
