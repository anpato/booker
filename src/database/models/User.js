import { Schema } from 'mongoose'

const UserModel = new Schema(
  {
    name: String,
    username: String,
    email: String,
    password_digest: String,
    isVerified: Boolean
  },
  {
    timeStamps: true
  }
)

export { UserModel }
