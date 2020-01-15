import bodyParser from 'body-parser'
import helmet from 'helmet'
import logger from 'morgan'
import cors from 'cors'
import { HandleError } from '../middleware/error'

export default [
  helmet(),
  logger('dev'),
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
]
