import bodyParser from 'body-parser'
import helmet from 'helmet'
import logger from 'morgan'
import cors from 'cors'
import { ErrorHandler } from '../middleware/error/ErrorHandler'

export default [
  helmet(),
  logger('dev'),
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  (err, req, res, next) => ErrorHandler(err, res)
]
