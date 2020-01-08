import { Router } from 'express'
import EmployeeRouter from './EmployeeRouter'
import BusinessRouter from './BusinessRouter'

const AppRouter = Router()

AppRouter.use('/employees', EmployeeRouter)
AppRouter.use('/businesses', BusinessRouter)

export default AppRouter
