import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'
import * as validators from '../middleware/validators'
import * as resolvers from '../utils/resolvers'

const EmployeeRouter = Router()
const controller = new EmployeeController()

// Takes two queries, user & provider
// Provider is employee_id and user is user_id
// ex: /api/employees/?user=user_id&provider=employee_id
EmployeeRouter.post(
  '/',
  resolvers.FindUserAndEmployee,
  validators.VerifyIsUserValid,
  resolvers.CheckIfSlotIsAvailable,
  controller.AddAppointmentSlotToEmployee
)

EmployeeRouter.put(
  '/:employee_id/appointment',
  resolvers.FindEmployeeAndAppointment,
  controller.UpdateAppointment
)
export default EmployeeRouter
