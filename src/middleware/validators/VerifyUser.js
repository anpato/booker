export const VerifyIsUserValid = (req, res, next) =>
  res.locals.user.isVerified
    ? next()
    : res.status(401).json({ message: 'You must validate your account' })
