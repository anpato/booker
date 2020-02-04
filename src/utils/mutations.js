import { Business, Employee, Address } from '../database/Schema'
import { Types } from 'mongoose'

export const InsertBusinessesMutation = async businesses => {
  const newBusinesses = await Business.insertMany(businesses)
  return newBusinesses
}

export const InsertEmployeeMutation = async employees => {
  const newEmployees = await Employee.insertMany(employees)
  return newEmployees
}

export const InsertAddressesMutation = async addresses => {
  const newAddresses = await Address.insertMany(addresses)
  return newAddresses
}

export const InsertModel = (model, params) => {
  const newModel = new model(params)
  newModel.save()
  return newModel
}

export const ParseRequestedData = (models, returnType) =>
  models.map(model => {
    return model[returnType]
  })

export const AddBusinessIdToEmployee = async (
  employee_id,
  business_id,
  next
) => {
  try {
    await Employee.updateOne(
      { _id: employee_id },
      {
        business_id: business_id
      }
    )
  } catch (error) {
    throw error
  }
}

export const InsertTestSeed = (employees, businesses) => {
  employees.forEach(employee => {
    mutations.InsertModel(Employee, employee)
  })
  businesses.forEach(business => {
    mutations.InsertModel(Business, business)
  })
}

export const AddEmployeeIdToBusiness = async employee => {
  try {
    await Business.updateOne(
      { _id: employee.business_id },
      { $set: { employees: employee._id } }
    )
  } catch (error) {
    throw error
  }
}
