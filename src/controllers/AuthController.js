import { SALT_ROUNDS, APP_SECRET } from '../env'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import uuidV4 from 'uuid/v4'

import { User, VerifcationToken } from '../database/Schema'
export default class AuthController {
  constructor() {
    this.jwt = jsonwebtoken
    this.uuid = uuidV4
  }
  Authenticate = async (req, res, next) => {
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
    const token = this.jwt.sign(
      { payload, exp: Math.floor(new Date().getTime() / 1000) + 42 * 7200 },
      APP_SECRET
    )
    return token
  }

  VerifyPassword = async (user, password, res) => {
    try {
      return await bcrypt.compare(password, user.password_digest)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  HashPassword = async (password, res) => {
    try {
      return await bcrypt.hash(password, SALT_ROUNDS)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  VerifyUserAccount = async (req, res, next) => {
    try {
      const { _id } = res.locals.token.user_id
      await User.updateOne({ _id }, { isVerified: true })
      next()
    } catch (error) {
      throw error
    }
  }

  RegisterUser = async (req, res) => {
    try {
      const { username, name, email, password } = res.locals.user
      const password_digest = await this.HashPassword(password, res)
      const user = new User({
        name,
        username,
        email,
        password_digest,
        isVerified: false
      })
      const token = new VerifcationToken({
        token: this.uuid(),
        user_id: user._id,
        expire_at: Date.now()
      })
      token.save()
      user.save()
      res.send({ user, token })
    } catch (error) {
      throw error
    }
  }

  LoginUser = async (req, res) => {
    try {
      const { username, password } = res.locals.user
      const user = await User.findOne({ username })
      if (user && (await this.VerifyPassword(user, password, res))) {
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name
        }
        const token = this.SignToken(payload)
        return res.send({ user: payload, token })
      }
      return res.status(401).json({ message: 'Unauthorized' })
    } catch (error) {
      throw error
    }
  }
}
