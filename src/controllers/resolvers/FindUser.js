export const FindUser = async (req, res, next, params) => {
  const user = await User.findOne(params)
  res.locals = { user }
  next()
}
