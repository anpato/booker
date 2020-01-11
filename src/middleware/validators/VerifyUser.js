import { ErrorHandler } from '../error'

export const VerifyIsUserValid = (req, res, next) => {
  return res.locals.user.isVerified
    ? next()
    : next(new ErrorHandler(401, 'Account Not Verified'))
}
