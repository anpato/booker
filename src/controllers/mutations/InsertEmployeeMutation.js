import { Employee } from '../../database/Schema'

export const InsertEmployeeMutation = async employees => {
  const newEmployees = await Employee.insertMany(employees)
  return newEmployees
}
