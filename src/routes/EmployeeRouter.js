import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'
import { VerifyIsUserValid } from '../middleware'

const EmployeeRouter = Router()

const controller = new EmployeeController()

// Takes two queries, user & provider
// Provider is employee_id and user is user_id
// ex: /api/employees/?user=user_id&provider=employee_id
EmployeeRouter.post(
  '/',
  controller.FindUserAndEmployee,
  VerifyIsUserValid,
  controller.CheckIfSlotIsAvailable,
  controller.AddAppointmentSlotToEmployee
)

export default EmployeeRouter
