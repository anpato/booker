import { model } from 'mongoose'
import {
  UserSchema,
  AppointmentSchema,
  BusinessSchema,
  EmployeeSchema
} from './models'

const User = model('users', UserSchema)
const Appointment = model('appointments', AppointmentSchema)
const Business = model('businesses', BusinessSchema)
const Employee = model('employees', EmployeeSchema)

export { User, Appointment, Business, Employee }
