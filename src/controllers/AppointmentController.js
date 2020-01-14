import { Appointment } from '../database/Schema'

class AppointmentController {
  FindAllAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find({
        employee_id: req.params.employee_id
      })
      res.send(appointments)
    } catch (error) {
      throw error
    }
  }

  FindAllActiveAppointments = async (req, res) => {
    try {
      const activeAppointments = await Appointment.find().where({
        isCanceled: false,
        employee_id: req.query.employee
      })
      res.send(activeAppointments)
    } catch (error) {
      throw error
    }
  }

  UpdateAppointment = async (req, res) => {
    try {
      await Appointment.findByIdAndUpdate(
        req.params.appointment_id,
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

export default AppointmentController
