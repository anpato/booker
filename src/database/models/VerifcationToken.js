import { Schema } from 'mongoose'
const VerifcationTokenSchema = new Schema(
  {
    token: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
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

export { VerifcationTokenSchema }
