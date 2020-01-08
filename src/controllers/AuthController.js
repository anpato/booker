import { SALT_ROUNDS, APP_SECRET } from '../env'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

import { User } from '../database/Schema'
export default class AuthController {
  constructor() {
    this.jwt = jsonwebtoken
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

  VerifyUserAccount = async (req, res) => {
    try {
      await User.findOneAndUpdate()
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
      user.save()
      res.send(user)
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
