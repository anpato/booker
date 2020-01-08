import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'

const EmployeeRouter = Router()

const controller = new EmployeeController()

// EmployeeRouter.get('/', controller.show)
EmployeeRouter.post('/', controller.addAppointmentSlotToEmployee)

export default EmployeeRouter
