import express from 'express'
import Router from './routes'
import Database from './database/Database'
import chalk from 'chalk'
import { HandleError, ErrorHandler } from './middleware/error'

class Server {
  constructor(port, middleWare, baseroute) {
    this.app = express()
    this.port = port
    this.middleWare = middleWare
    this.baseroute = baseroute
    this.database = new Database()
  }
  get() {
    this.app.get(this.baseroute, (req, res) => res.json({ msg: 'Portfolio' }))
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`${chalk.green('Server Started on ')} port:${this.port}`)
    )
  }

  init_middleWare() {
    this.middleWare.forEach(middleware => this.app.use(middleware))
  }
  init_routes() {
    this.app.use('/api', Router)
  }
  connectDB() {
    this.database.ConnectDB().once('open', () => {
      this.listen()
    })
  }
  init_errorHandlers() {
    this.app.use(HandleError)
  }
  initialize() {
    this.app.disable('x-powered-by')
    this.init_middleWare()
    this.init_routes()

    this.connectDB()
    this.init_errorHandlers()
  }
}

export default Server
