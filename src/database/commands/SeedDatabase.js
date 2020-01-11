import Database from '../Database'
import { readFile } from 'fs'
import { CreateSeedFiles } from './CreateSeeds'
import TestEmployees from '../data/TestEmployees'
import TestBusiness from '../data/TestBusiness'

const SeedTests = () => {
  const database = new Database()
  const Files = { employees: TestEmployees, businesses: TestBusiness }
  return database.InsertTestSeed(Files.employees, Files.businesses)
}

const main = async () => {
  CreateSeedFiles().then(() => {
    readFile(
      __dirname + '/../data/Employees.json',
      'utf8',
      (err, employees) => {
        readFile(
          __dirname + '/../data/Businesses.json',
          'utf8',
          (err, businesses) => {
            const database = new Database(
              JSON.parse(employees),
              JSON.parse(businesses)
            )
            database.InsertEmployeeAndBusinessMutation()
          }
        )
      }
    )
  })
}

const run = async () => {
  try {
    await main()
    SeedTests()
  } catch (error) {
    throw error
  }
}

run()
