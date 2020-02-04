import Database from '../Database'
import { readFile, read } from 'fs'
import { CreateSeedFiles } from './CreateSeeds'
import TestEmployees from '../data/TestEmployees'
import TestBusiness from '../data/TestBusiness'
import * as mutations from '../../utils/mutations'
import * as resolvers from '../../utils/resolvers'
import chalk from 'chalk'

// Should only be used for testing http requests in api folder
// const SeedTests = async () => {
//   const Files = { employees: TestEmployees, businesses: TestBusiness }
//   await mutations.InsertBusinessesMutation(Files.businesses)
//   await mutations.InsertEmployeeMutation(Files.employees)
// }

const InsertData = async (businesses, employees, addresses) => {
  try {
    console.info(chalk.green('Inserting JSON Files'))
    const businessData = await mutations.InsertBusinessesMutation(businesses)
    const employeeData = await mutations.InsertEmployeeMutation(employees)
    await mutations.InsertAddressesMutation(addresses)
    console.info(chalk.green('Creating Associations'))
    console.log(businessData, employeeData)
    employeeData.forEach(async (employee, index) => {
      await mutations.AddBusinessIdToEmployee(
        employee._id,
        businessData[index]._id
      )
    })
    const enteredEmployees = await resolvers.FindEmployees()
    await enteredEmployees.reduce(async (promise, employee) => {
      await mutations.AddEmployeeIdToBusiness(employee)
    }, Promise.resolve())
  } catch (error) {
    throw error
  } finally {
    // process.exit()
  }
}

const main = async () => {
  const { businesses, employees, addresses } = await CreateSeedFiles()
  await InsertData(businesses, employees, addresses)
}

const run = async () => {
  const database = new Database()
  database.ConnectDB()
  try {
    await main()
    // await SeedTests()
  } catch (error) {
    throw error
  }
}

run()
