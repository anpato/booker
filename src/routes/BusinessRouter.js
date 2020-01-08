import { Router } from 'express'
import BusinessController from '../controllers/BusinessController'

const BusinessRouter = Router()
const controller = new BusinessController()

BusinessRouter.get('/', controller.show)
BusinessRouter.post('/', controller.create)
BusinessRouter.put('/', controller.addEmployeesToBusiness)
BusinessRouter.get('/:business_id', controller.getBusinessById)

export default BusinessRouter
