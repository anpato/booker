import { Schema } from 'mongoose'
import uuid from 'uuid/v4'

const BusinessModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    name: String,
    address: {
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
    phone_number: String,
    employees: {
      type: [
        {
          type: String,
          ref: 'employees'
        }
      ]
    }
  },
  {
    timeStamps: true
  }
)

export { BusinessModel }
