export const PrepareUserInsertion = (req, res, next) => {
  res.locals.user = {}
  for (let key in req.body) {
    if (key === 'username' || key === 'email') {
      res.locals.user[key] = req.body[key].toLowerCase()
    } else {
      res.locals.user[key] = req.body[key]
    }
  }
  next()
}
