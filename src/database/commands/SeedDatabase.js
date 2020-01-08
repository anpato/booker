import Database from '../Database'
import { exec } from 'child_process'
import { CreateSeedFiles } from './CreateSeeds'
import chalk from 'chalk'

const main = async () => {
  const database = new Database()
  await CreateSeedFiles()
  console.info(chalk.green('Inserting Json Files'))
  exec(
    'mongoimport --jsonArray --db booker_development  --collection employees --file  ./src/database/data/Employees.json && mongoimport --jsonArray --db booker_development   --collection businesses --file   ./src/database/data/Businesses.json',
    err => {
      if (err) throw err
    }
  ).once('exit', () => database.InsertEmployeeAndBusinessMutation())
}

const run = async () => {
  try {
    main()
  } catch (error) {
    throw error
  }
}

run()
