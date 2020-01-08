import { Schema } from 'mongoose'
const BusinessSchema = new Schema(
  {
    name: String,
    address: {
      address_line: String,
      zip_code: String,
      city: String,
      state: String,
      cc: String
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
          type: Schema.Types.ObjectId
        }
      ],
      ref: 'employees'
    }
  },
  {
    timeStamps: true
  }
)

export { BusinessSchema }
