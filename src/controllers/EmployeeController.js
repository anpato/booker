import { Employee, User, Appointment } from '../database/Schema'

class EmployeeController {
  AddAppointmentSlotToEmployee = async (req, res) => {
    try {
      const { slot, day } = req.body.appointment
      const { user, employee } = res.locals

      const appointment = new Appointment({
        slot,
        day: new Date(day),
        user: user._id,
        service_provider: employee._id,
        isCanceled: false
      })
      appointment.save()
      res.send(appointment)
    } catch (error) {
      throw error
    }
  }

  CheckIfSlotIsAvailable = async (req, res, next) => {
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

  FindUserAndEmployee = async (req, res, next) => {
    const user = await User.findOne({ _id: req.query.user })
    const employee = await Employee.findOne({ _id: req.query.provider })
    res.locals = { user, employee }
    next()
  }
}

export default EmployeeController
