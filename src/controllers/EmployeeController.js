import { Employee, User, Appointment } from '../database/Schema'
import * as mutations from './mutations'
class EmployeeController {
  AddAppointmentSlotToEmployee = (req, res) => {
    try {
      const { slot, day } = req.body.appointment
      const { user, employee } = res.locals

      const appointment = mutations.InsertModel(Appointment, {
        slot,
        day: new Date(day),
        user: user._id,
        employee_id: employee._id,
        isCanceled: false
      })
      res.send(appointment)
    } catch (error) {
      throw error
    }
  }

  UpdateAppointment = async (req, res) => {
    try {
      await Appointment.findOneAndUpdate(
        { employee_id: req.params.employee_id },
        { ...req.body.appointment },
        { new: true },
        (err, doc) => {
          if (err) throw err
          res.send(doc)
        }
      )
    } catch (error) {
      throw error
    }
  }
}

export default EmployeeController
