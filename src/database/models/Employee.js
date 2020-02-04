import { Schema } from 'mongoose'
import uuid from 'uuid/v4'

const EmployeeModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    name: String,
    profile_img: String,
    email: String,
    business_id: {
      type: String,
      ref: 'businesses'
    },
    isAdmin: Boolean
  },
  {
    timeStamps: true
  }
)

export { EmployeeModel }
