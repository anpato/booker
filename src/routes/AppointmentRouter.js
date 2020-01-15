import { Router } from 'express'
import AppointmentController from '../controllers/AppointmentController'
import * as resolvers from '../utils/resolvers'
import * as validators from '../middleware/validators'

const AppointmentRouter = Router()
const controller = new AppointmentController()
// Takes an employee id as query param employee, ex: appoinments/?employee=employee_id
AppointmentRouter.get('/active', controller.FindAllActiveAppointments)
AppointmentRouter.get('/employee/:employee_id', controller.FindAllAppointments)
AppointmentRouter.put(
  '/:appointment_id/employee/:employee_id',
  resolvers.FindEmployeeAndAppointment,
  validators.VerifyEmployeeCanEdit,
  controller.UpdateAppointment
)

export default AppointmentRouter
