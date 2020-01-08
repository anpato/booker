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
}

export default AppointmentController
