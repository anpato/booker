import { Appointment } from '../../database/Schema'

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
