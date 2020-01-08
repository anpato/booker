export const VerifyEmployeeIsAdmin = (req, res, next) =>
  res.locals.employee.isAdmin
    ? next()
    : res.status(401).json({
        message: 'You must be an administrator in order to perform this task.'
      })
