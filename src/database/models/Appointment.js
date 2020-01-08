import { Schema } from 'mongoose'

const AppointmentSchema = new Schema(
  {
    slot: String,
    service_provider: {
      type: Schema.Types.ObjectId,
      ref: 'employees'
    },
    day: Date,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    isCanceled: Boolean
  },
  {
    timeStamps: true
  }
)

export { AppointmentSchema }
