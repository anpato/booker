import { model } from 'mongoose'
import {
  UserModel,
  AppointmentModel,
  AddressModel,
  BusinessModel,
  EmployeeModel,
  VerificationTokenModel
} from './models'

const User = model('users', UserModel)
const Appointment = model('appointments', AppointmentModel)
const Business = model('businesses', BusinessModel)
const Employee = model('employees', EmployeeModel)
const VerifcationToken = model('verification_tokens', VerificationTokenModel)
const Address = model('addresses', AddressModel)

export { User, Appointment, Business, Employee, VerifcationToken, Address }
