import bodyParser from 'body-parser'
import helmet from 'helmet'
import logger from 'morgan'
import cors from 'cors'

export default [
  helmet(),
  logger('dev'),
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
]
