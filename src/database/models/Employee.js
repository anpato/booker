import { Schema } from 'mongoose'
const EmployeeSchema = new Schema(
  {
    name: String,
    email: String,
    business_id: {
      type: Schema.Types.ObjectId,
      ref: 'businesses'
    },
    isAdmin: Boolean
  },
  {
    timeStamps: true
  }
)

export { EmployeeSchema }
