import Database from '../tools/Database'
import chalk from 'chalk'

const main = () => {
  const db = new Database()
  db.DropDB()
  console.info(chalk.green('Database reset successfully'))
}

main()
