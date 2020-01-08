import { Schema } from 'mongoose'

const AppointmentSchema = new Schema(
  {
    slot: Date,
    service_provider: {
      type: Schema.Types.ObjectId,
      ref: 'employees'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  {
    timeStamps: true
  }
)

export { AppointmentSchema }