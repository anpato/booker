import { Schema } from 'mongoose'
import uuid from 'uuid/v4'
const VerificationTokenModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    token: {
      type: String
    },
    user_id: {
      type: String,
      ref: 'users'
    },
    expire_at: {
      type: Date,
      default: Date.now(),
      index: { expires: 129600 }
    }
  },
  {
    timeStamps: true
  }
)

export { VerificationTokenModel }
