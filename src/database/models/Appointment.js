import { Schema } from 'mongoose'
import uuid from 'uuid/v4'
const AppointmentModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    slot: String,
    employee_id: {
      type: String,
      ref: 'employees'
    },
    day: Date,
    user: {
      type: String,
      ref: 'users'
    },
    isCanceled: Boolean
  },
  {
    timeStamps: true
  }
)

export { AppointmentModel }
