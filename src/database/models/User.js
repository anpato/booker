import { Schema } from 'mongoose'
import uuid from 'uuid/v4'

const UserModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
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
