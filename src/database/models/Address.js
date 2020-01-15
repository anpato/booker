import { Schema } from 'mongoose'
const AddressModel = new Schema(
  {
    address_line: String,
    zip_code: String,
    city: String,
    state: String,
    cc: String,
    lat: Number,
    lng: Number
  },
  {
    timeStamps: true
  }
)

export { AddressModel }
