import { Router } from 'express'
import AppointmentController from '../controllers/AppointmentController'

const AppointmentRouter = Router()

const controller = new AppointmentController()

// Takes an employee id as query param provider, ex: appoinments/?provider=employee_id
AppointmentRouter.get('/active', controller.FindAllActiveAppointments)
AppointmentRouter.get('/employee/:provider_id', controller.FindAllAppointments)

export default AppointmentRouter
