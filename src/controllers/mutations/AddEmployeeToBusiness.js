import { Employee, Business } from '../../database/Schema'
import { Types } from 'mongoose'
const AddBusinessIdToEmployee = async (employees, businesses) => {
  employees.forEach(async (employee, index) => {
    await Employee.findOneAndUpdate(
      { _id: employee._id },
      {
        business_id: Types.ObjectId(businesses[index]._id)
      },
      { new: true },
      async (err, doc) => AddEmployeeIdToBusiness(doc)
    )
  })
  return true
}

const AddEmployeeIdToBusiness = async employee => {
  await Business.findOneAndUpdate(
    { _id: employee.business_id },
    { $set: { employees: employee._id } }
  )
}

export const InsertEmployeeAndBusinessMutation = async (
  employees,
  businesses
) => await AddBusinessIdToEmployee(employees, businesses)
