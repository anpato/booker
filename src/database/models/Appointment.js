import { Schema } from 'mongoose'

const AppointmentModel = new Schema(
  {
    slot: String,
    employee_id: {
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

export { AppointmentModel }
