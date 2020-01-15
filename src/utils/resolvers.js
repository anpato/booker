import {
  Address,
  Appointment,
  Employee,
  User,
  VerifcationToken
} from '../database/Schema'
export const CheckIfSlotIsAvailable = async (req, res, next) => {
  try {
    const ExistingAppointment = await Appointment.findOne().where({
      day: req.body.appointment.day,
      slot: req.body.appointment.slot,
      service_provider: res.locals.employee._id
    })
    return ExistingAppointment
      ? res.status(400).json({ message: 'Slot is no longer available.' })
      : next()
  } catch (error) {
    throw error
  }
}

export const FindEmployee = async (req, res, next) => {
  const employee = await Employee.findOne(req.params.employee_id)
  if (employee) res.locals.employee = employee
  return employee
    ? next()
    : res.status(400).json({ message: 'Employee not found.' })
}

export const FindEmployees = async () => {
  const employees = await Employee.find()
  return employees
}

export const FindEmployeeAndAppointment = async (req, res, next) => {
  const appointment = await Appointment.findOne({
    _id: req.params.appointment_id
  })
  const employee = await Employee.findOne({ _id: req.params.employee_id })
  res.locals = { appointment, employee }
  next()
}

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

export const FindUserAndEmployee = async (req, res, next) => {
  const user = await User.findOne({ _id: req.query.user })
  const employee = await Employee.findOne({ _id: req.query.employee })
  res.locals = { user, employee }
  next()
}

export const FindVerificationToken = async (req, res, next) => {
  const { user } = res.locals
  const token = await VerifcationToken.findOne({ user_id: user._id })
  if (user.isVerified) {
    return res.status(202).json({ msg: 'Account already verified' })
  } else if (!token && !user.isVerified) {
    await RemoveUserFromDb(req.params.user_id, res)
  } else {
    res.locals.token = token
    next()
  }
}

export const RemoveUserFromDb = async (id, res) => {
  await User.deleteOne({ _id: id })
  throw new ErrorHandler(401, 'Token Has Expired')
}

export const RemoveVerificationToken = async (req, res) => {
  await VerifcationToken.deleteOne({ _id: res.locals.token._id })
  res.send({ message: 'Account Verified' })
}
