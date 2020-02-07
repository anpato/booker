import { Schema } from 'mongoose'
import uuid from 'uuid/v4'

const BusinessModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    name: String,
    address_id: {
      type: String,
      ref: 'addresses'
    },
    hours: [
      {
        day: String,
        open_time: String,
        close_time: String
      }
    ],
    phone_number: String
  },
  {
    timeStamps: true
  }
)

export { BusinessModel }
