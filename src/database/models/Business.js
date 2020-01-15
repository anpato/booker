import { Schema } from 'mongoose'

const BusinessModel = new Schema(
  {
    name: String,
    address: {
      type: Schema.Types.ObjectId,
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
          type: Schema.Types.ObjectId,
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
