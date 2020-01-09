import { Router } from 'express'
import BusinessController from '../controllers/BusinessController'

const BusinessRouter = Router()
const controller = new BusinessController()

BusinessRouter.get('/', controller.showBusinesses)
BusinessRouter.post('/', controller.createNewBusiness)
BusinessRouter.put('/:business_id', controller.addEmployeesToBusiness)
BusinessRouter.put('/:business_id/details', controller.updateBusiness)
BusinessRouter.get('/:business_id', controller.getBusinessById)
BusinessRouter.delete('/:business_id', controller.RemoveBusinessAndEmployees)
export default BusinessRouter
