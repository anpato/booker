import { connection, connect } from 'mongoose'
import { db } from '../config'
import chalk from 'chalk'

class Database {
  constructor() {
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
}

export default Database
