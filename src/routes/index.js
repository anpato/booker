import { Router } from 'express'
import EmployeeRouter from './EmployeeRouter'
import BusinessRouter from './BusinessRouter'
import AppointmentRouter from './AppointmentRouter'
import UserRouter from './UserRouter'

const AppRouter = Router()

AppRouter.use('/employees', EmployeeRouter)
AppRouter.use('/businesses', BusinessRouter)
AppRouter.use('/appointments', AppointmentRouter)
AppRouter.use('/users', UserRouter)

export default AppRouter
