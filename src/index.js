import express from 'express'
import middleWare from './config/ServerConfig'
import Router from './routes'
import { PORT } from './env'
import Database from './database/Database'
import chalk from 'chalk'

class App {
  constructor(port, middleWare, baseRoute) {
    this.app = express()
    this.port = port
    this.middleWare = middleWare
    this.baseRoute = baseRoute
    this.database = new Database()
  }
  get() {
    this.app.get(this.baseRoute, (req, res) => res.json({ mdg: 'Portfolio' }))
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`${chalk.green('Server Started on ')} port:${this.port}`)
    )
  }

  init_middleWare() {
    this.middleWare.forEach(tool => this.app.use(tool))
  }
  init_routes() {
    this.app.use('/api', Router)
  }
  connectDB() {
    this.database.ConnectDB().once('open', () => {
      this.listen()
    })
  }
  initialize() {
    this.app.disable('x-powered-by')
    this.init_middleWare()
    this.init_routes()
    this.connectDB()
  }
}

const app = new App(PORT, middleWare, '/')

app.initialize()
