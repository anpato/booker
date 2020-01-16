import 'dotenv/config'

export const MONGODB_URI = process.env.MONGODB_URI
export const DEVELOP_URI = process.env.DEVELOP_URI
export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT || 3001
export const APP_SECRET = process.env.APP_SECRET
export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
