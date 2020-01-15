import { Employee, Business } from './Schema'
import { Types, connection, connect } from 'mongoose'
import * as mutations from '../controllers/mutations/InsertModel'
import { db } from '../config'
import chalk from 'chalk'

class Database {
  constructor(employees, businesses) {
    this.employees = employees
    this.businesses = businesses
    this.counter = 0
    this.db = db
    this.connect = connect
    this.params = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
    this.connection = connection
  }

  CloseConnection = () => {
    console.info(
      `${chalk.red('Closing connection to:')}  ${chalk.bgGreen(this.db().name)}`
    )
    this.connection.close()
  }

  ConnectDB = () => {
    console.info(chalk.greenBright('Connecting to Database'))
    this.connect(this.db().connection, this.params)
    this.connection.once('open', () => {
      console.info(`${chalk.blueBright('Connected to:')}  ${this.db().name}`)
    })
    return this.connection
  }

  DropDB = async () => {
    await this.ConnectDB().once('open', async () => {
      console.info(chalk.redBright('Droppping Database'))
      await this.connection.db.dropDatabase()
      console.info(chalk.redBright('Database Dropped'))
      this.CloseConnection()
    })
  }

  AddBusinessIdToEmployee = async (employees, businesses) => {
    let counter = 0
    console.info(chalk.green('Creating Associations'))
    try {
      await employees.forEach(async (employee, index) => {
        await Employee.findOneAndUpdate(
          { _id: employee._id },
          {
            business_id: Types.ObjectId(businesses[index]._id)
          },
          { new: true },
          async (err, doc) => {
            await this.AddEmployeeIdToBusiness(doc, counter)
            this.counter++
            if (this.counter === this.employees.length)
              return this.CloseConnection()
          }
        )
      })
    } catch (error) {
      throw error
    }
  }

  InsertTestSeed = (employees, businesses) => {
    employees.forEach(employee => {
      mutations.InsertModel(Employee, employee)
    })
    businesses.forEach(business => {
      mutations.InsertModel(Business, business)
    })
  }

  AddEmployeeIdToBusiness = async employee => {
    try {
      await Business.findOneAndUpdate(
        { _id: employee.business_id },
        { $set: { employees: employee._id } }
      )
    } catch (error) {
    } finally {
    }
  }

  InsertEmployeeAndBusinessMutation = async () => {
    try {
      await this.ConnectDB()
      await Employee.insertMany(this.employees)
      await Business.insertMany(this.businesses)
      console.info(chalk.green('Inserting JSON Files'))
      await this.AddBusinessIdToEmployee(this.employees, this.businesses)
    } catch (error) {
      throw error
    } finally {
    }
  }
}

export default Database
