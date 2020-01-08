export const VerifyEmployeeCanEdit = (req, res, next) => {
  const { employee, appointment } = res.locals
  return res.locals.employee.isAdmin ||
    employee._id.toString() === appointment.service_provider.toString()
    ? next()
    : res.status(401).json({
        message: 'You must be an administrator in order to perform this task.'
      })
}
