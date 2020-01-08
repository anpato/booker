import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import * as mutations from '../controllers/mutations'

const AuthRouter = Router()
const Auth = new AuthController()

AuthRouter.post('/register', mutations.PrepareUserInsertion, Auth.RegisterUser)
AuthRouter.post('/login', mutations.PrepareUserInsertion, Auth.LoginUser)

export default AuthRouter
