import { Schema } from 'mongoose'

const UserSchema = new Schema(
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

export { UserSchema }
