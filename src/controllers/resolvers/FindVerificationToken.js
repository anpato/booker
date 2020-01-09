import { VerifcationToken } from '../../database/Schema'
import { RemoveUserFromDb } from '../resolvers'
export const FindVerificationToken = async (req, res, next) => {
  await VerifcationToken.findById(req.params.token_id)
    .populate('user_id')
    .exec(async (err, token) => {
      if (!token) return await RemoveUserFromDb(req.params.user_id, res)
      else if (token && token.user_id.isVerified) {
        return res.status(202).json({ msg: 'Account already verified' })
      } else {
        res.locals.token = token
        next()
      }
    })
}
