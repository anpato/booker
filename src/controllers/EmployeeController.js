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

  UpdateAppointment = (req, res) => {
    try {
      // await Appointment.findOneAndUpdate({})
    } catch (error) {
      throw error
    }
  }
}

export default EmployeeController
