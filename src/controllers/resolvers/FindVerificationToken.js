import { VerifcationToken } from '../../database/Schema'

export const FindVerificationToken = async (req, res, next) => {
  await VerifcationToken.findById(req.params.token_id)
    .populate('user_id')
    .exec((err, token) => {
      res.locals.token = token
      next()
    })
}
