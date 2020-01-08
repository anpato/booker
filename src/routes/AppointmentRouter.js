import { Router } from 'express'
import AppointmentController from '../controllers/AppointmentController'
import * as resolvers from '../controllers/resolvers'
import * as validators from '../middleware/validators'

const AppointmentRouter = Router()
const controller = new AppointmentController()
// Takes an employee id as query param provider, ex: appoinments/?provider=employee_id
AppointmentRouter.get('/active', controller.FindAllActiveAppointments)
AppointmentRouter.get('/employee/:provider_id', controller.FindAllAppointments)
AppointmentRouter.put(
  '/:appointment_id/employee/:employee_id',
  resolvers.FindEmployee,
  validators.VerifyEmployeeIsAdmin,
  controller.UpdateAppointment
)

export default AppointmentRouter
