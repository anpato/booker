import { model } from 'mongoose'
import {
  UserSchema,
  AppointmentSchema,
  BusinessSchema,
  EmployeeSchema,
  VerifcationTokenSchema
} from './models'

const User = model('users', UserSchema)
const Appointment = model('appointments', AppointmentSchema)
const Business = model('businesses', BusinessSchema)
const Employee = model('employees', EmployeeSchema)
const VerifcationToken = model('verifcation_tokens', VerifcationTokenSchema)

export { User, Appointment, Business, Employee, VerifcationToken }
