import Database from '../Database'

const main = async () => {
  const db = new Database()
  await db.DropDB()
}

const run = async () => {
  try {
    await main()
  } catch (error) {
    throw error
  }
}

run()
