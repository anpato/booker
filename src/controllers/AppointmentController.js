import { Appointment } from '../database/Schema'

class AppointmentController {
  FindAllAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find({
        service_provider: req.params.provider_id
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
        service_provider: req.query.provider
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
