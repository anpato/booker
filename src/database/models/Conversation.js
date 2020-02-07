import { Schema } from 'mongoose'
const ConversationModel = new Schema(
  {
    message_id: {
      type: Schema.Types.ObjectId,
      ref: 'messages'
    }
  },
  {
    timeStamps: true
  }
)

export { ConversationModel }
