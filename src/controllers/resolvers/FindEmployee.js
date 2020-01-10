import { Employee } from '../../database/Schema'

export const FindEmployee = async (req, res, next) => {
  const employee = await Employee.findOne(req.params.employee_id)
  if (employee) res.locals.employee = employee
  return employee
    ? next()
    : res.status(400).json({ message: 'Employee not found.' })
}
