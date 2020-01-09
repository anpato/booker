import { Business, Employee, Appointment } from '../database/Schema'
import { InsertModel } from './mutations'

class BusinessController {
  showBusinesses = async (req, res) => {
    try {
      const businesses = await Business.find()
      res.send(businesses)
    } catch (error) {
      throw error
    }
  }

  getBusinessById = async (req, res) => {
    try {
      await Business.findOne({
        _id: req.params.business_id
      })
        .populate('employees')
        .exec((err, data) => res.send(data))
    } catch (error) {
      throw error
    }
  }

  updateBusiness = async (req, res) => {
    try {
      await Business.findByIdAndUpdate(
        req.params.business_id,
        req.body.business,
        { new: true },
        (err, doc) => {
          if (err) throw err
          res.send(doc)
        }
      )
    } catch (error) {
      throw error
    }
  }

  addEmployeesToBusiness = async (req, res) => {
    try {
      const employeeIds = await req.body.employees.map(employee => {
        const InsertedEmployee = InsertModel(Employee, {
          ...employee,
          business_id: req.params.business_id
        })
        return InsertedEmployee._id
      })
      await Business.findByIdAndUpdate(
        req.params.business_id,
        {
          $push: { employees: employeeIds }
        },
        { new: true },
        (err, doc) => {
          if (err) throw err
          res.send(doc)
        }
      )
    } catch (error) {
      throw error
    }
  }

  createNewBusiness = async (req, res) => {
    try {
      const business = new Business(req.body.business)
      business.save()
      res.send(business)
    } catch (error) {
      throw error
    }
  }

  RemoveBusinessAndEmployees = async (req, res) => {
    try {
      await Business.findByIdAndDelete(req.params.business_id)
      await Employee.findOneAndDelete(
        { business_id: req.params.business_id },
        async (err, doc) => {
          await Appointment.deleteMany({ service_provider: doc._id })
        }
      )
      res.send({ message: 'Closed Business' })
    } catch (error) {
      throw error
    }
  }
}

export default BusinessController
