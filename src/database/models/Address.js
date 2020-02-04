import { Schema } from 'mongoose'
import uuid from 'uuid/v4'
const AddressModel = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },

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
