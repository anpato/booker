import { Employee, Appointment } from '../../database/Schema'

export const FindEmployeeAndAppointment = async (req, res, next) => {
  const appointment = await Appointment.findOne({
    _id: req.params.appointment_id
  })
  const employee = await Employee.findOne({ _id: req.params.employee_id })
  res.locals = { appointment, employee }
  next()
}
