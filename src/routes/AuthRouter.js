import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import * as validators from '../middleware/validators'
import * as resolvers from '../utils/resolvers'

const AuthRouter = Router()
const Auth = new AuthController()
AuthRouter.post('/register', Auth.RegisterUser)
AuthRouter.post(
  '/login',
  resolvers.FindUser,
  validators.VerifyIsUserValid,
  Auth.LoginUser
)
AuthRouter.put(
  '/verify/user/:user_id/token/:token_id',
  resolvers.FindUser,
  resolvers.FindVerificationToken,
  Auth.VerifyUserAccount,
  resolvers.RemoveVerificationToken
)

export default AuthRouter
