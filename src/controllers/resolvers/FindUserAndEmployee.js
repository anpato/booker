import { User, Employee, Appointment } from '../../database/Schema'

export const FindUserAndEmployee = async (req, res, next) => {
  const user = await User.findOne({ _id: req.query.user })
  const employee = await Employee.findOne({ _id: req.query.employee })
  res.locals = { user, employee }
  next()
}
