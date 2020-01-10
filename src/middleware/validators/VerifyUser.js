import { ErrorHandler } from '../error'

export const VerifyIsUserValid = (err, req, res, next) => {
  err = new ErrorHandler(401, 'Account Not Found')
  return res.locals.user && res.locals.user.isVerified ? next() : next(err)
}
