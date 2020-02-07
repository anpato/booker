import { Schema } from 'mongoose'
const MessageModel = new Schema(
  {
    recipient_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    sender_id: {
      type: Schema.Types.ObjectId,
      ref: 'employees'
    }
  },
  {
    timeStamps: true
  }
)

export { MessageModel }
