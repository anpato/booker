import { Business, Employee } from '../database/Schema'
import { InsertEmployeeAndBusinessMutation } from './mutations/AddEmployeeToBusiness'

class BusinessController {
  show = async (req, res) => {
    try {
      const businesses = await Business.find()
      res.send(businesses)
    } catch (error) {
      throw error
    }
  }

  getBusinessById = async (req, res) => {
    try {
      res.send(await Business.findById(req.params.business_id))
    } catch (error) {
      throw error
    }
  }

  addEmployeesToBusiness = async (req, res) => {
    try {
      const employees = await Employee.find()
      const businesses = await Business.find()
      // console.log(businesses, employees)
      if (await InsertEmployeeAndBusinessMutation(employees, businesses)) {
        res.json({ message: 'Inserted Employees into Businesses' })
      }
    } catch (error) {
      throw error
    }
  }

  create = async (req, res) => {
    try {
      const business = new Business(req.body.business)
      business.save()
      res.send(business)
    } catch (error) {
      throw error
    }
  }

  destroy = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  update = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }
}

export default BusinessController
