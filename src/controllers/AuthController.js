import { SALT_ROUNDS, APP_SECRET } from '../env'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import uuidV4 from 'uuid/v4'
import * as mutations from './mutations'
import { User, VerifcationToken } from '../database/Schema'
import { ErrorHandler } from '../middleware/error'
export default class AuthController {
  constructor() {
    this.jwt = jsonwebtoken
    this.uuid = uuidV4
  }
  Authenticate = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const data = this.jwt.verify(token, APP_SECRET)
      res.locals.user = data
      next()
    } catch (error) {
      res.status(403).send({ error: 'Unauthorized' })
    }
  }

  SignToken = payload => {
    const token = this.jwt.sign({ payload }, APP_SECRET)
    return token
  }

  VerifyPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password_digest)
  }

  HashPassword = async password => {
    return await bcrypt.hash(password, SALT_ROUNDS)
  }

  VerifyUserAccount = async (req, res, next) => {
    try {
      const { _id } = res.locals.token.user_id
      await User.updateOne({ _id }, { isVerified: true })
      next()
    } catch (error) {
      next(new ErrorHandler(401, 'Account Not Found'))
    }
  }

  RegisterUser = async (req, res, next) => {
    try {
      const { username, name, email, password } = req.body
      const password_digest = await this.HashPassword(password)
      const user = mutations.InsertModel(User, {
        name,
        username,
        email,
        password_digest,
        isVerified: false
      })
      const token = mutations.InsertModel(VerifcationToken, {
        token: this.uuid(),
        user_id: user._id,
        expire_at: Date.now()
      })
      res.send({ user, token })
    } catch (error) {
      next(new ErrorHandler(500, 'Could not register account'))
    }
  }

  LoginUser = async (req, res, next) => {
    try {
      const { user, password } = res.locals
      if (await this.VerifyPassword(user, password)) {
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name
        }
        const token = this.SignToken(payload)
        return res.send({ user: payload, token })
      }
      next(new ErrorHandler(401, 'Unauthorized'))
    } catch (error) {
      throw error
    }
  }
}
