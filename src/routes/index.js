import { Router } from 'express'
import EmployeeRouter from './EmployeeRouter'
import BusinessRouter from './BusinessRouter'
import AppointmentRouter from './AppointmentRouter'

const AppRouter = Router()

AppRouter.use('/employees', EmployeeRouter)
AppRouter.use('/businesses', BusinessRouter)
AppRouter.use('/appointments', AppointmentRouter)

export default AppRouter
