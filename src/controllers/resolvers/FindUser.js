import { User } from '../../database/Schema'
import { ErrorHandler } from '../../middleware/error'

export const FindUser = async (req, res, next) => {
  const user = await User.findOne(
    req.params.user_id
      ? { _id: req.params.user_id }
      : { username: req.body.username }
  )
  res.locals = { user, password: req.body.password }
  if (user) {
    next()
  } else {
    next(new ErrorHandler(401, 'Account Not Found'))
  }
}
