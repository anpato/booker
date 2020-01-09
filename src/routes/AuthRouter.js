import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import * as mutations from '../controllers/mutations'
import * as validators from '../middleware/validators'
import * as resolvers from '../controllers/resolvers'

const AuthRouter = Router()
const Auth = new AuthController()

AuthRouter.post('/register', mutations.PrepareUserInsertion, Auth.RegisterUser)
AuthRouter.post(
  '/login',
  validators.VerifyIsUserValid,
  mutations.PrepareUserInsertion,
  Auth.LoginUser
)
AuthRouter.put(
  '/verify/user/:user_id/:token_id',
  resolvers.FindVerificationToken,
  Auth.VerifyUserAccount,
  resolvers.RemoveVerificationToken
)

export default AuthRouter
