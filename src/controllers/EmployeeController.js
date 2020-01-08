import { Employee, User } from '../database/Schema'

class EmployeeController {
  addAppointmentSlotToEmployee = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.query.user })
      const employee = await Employee.findOne({ _id: req.query.provider })
      console.log(user, employee)
    } catch (error) {
      throw error
    }
  }
}

export default EmployeeController
