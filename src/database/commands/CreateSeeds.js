import faker from 'faker'
import fs from 'fs'
import chalk from 'chalk'
import uuid from 'uuid/v4'

const createTimes = () => {
  let times = []
  let amTimes = [8, 9, 10, 11]
  let pmTimes = [12, 1, 2, 3, 4, 5, 6, 7]
  for (let index = 0; index < 7; index++) {
    let obj = {
      day: faker.date.weekday(),
      open_time: `${amTimes[Math.floor(Math.random() * amTimes.length)]}:00 AM`,
      close_time: `${pmTimes[Math.floor(Math.random() * amTimes.length)]}:00 PM`
    }
    times.push(obj)
  }
  return times
}

const createAddress = () => {
  const addressData = {
    _id: uuid(),
    address_line: faker.address.streetAddress(),
    zip_code: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.city(),
    cc: faker.address.countryCode(),
    lat: faker.address.latitude(),
    lng: faker.address.longitude()
  }

  return { _id: addressData._id, data: addressData }
}

const createBusinesses = lenOfItems => {
  const addresses = []
  return {
    businesses: [...Array(lenOfItems)].map(() => {
      const address = createAddress()
      addresses.push(address.data)
      return {
        _id: uuid(),
        name: faker.company.companyName(),
        address_id: address._id,
        hours: createTimes(),
        phone_number: faker.phone.phoneNumber()
      }
    }),
    addresses
  }
}

const createEmployee = lenOfItems =>
  [...Array(lenOfItems)].map(() => ({
    _id: uuid(),
    name: faker.name.findName(),
    profile_img: faker.image.avatar(),
    email: faker.internet.email(),
    business_id: null,
    isAdmin: faker.random.boolean()
  }))

const createUsers = lenOfItems =>
  [...Array(lenOfItems)].map(() => ({
    _id: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    password_digest: faker.random.uuid(),
    isVerified: faker.random.boolean()
  }))

export const CreateSeedFiles = async () => {
  console.info(chalk.greenBright('Generating Seed Data'))
  const lenOfItems = 4000
  const { businesses, addresses } = createBusinesses(lenOfItems)
  const employees = createEmployee(lenOfItems)
  const users = createUsers(lenOfItems)
  return { businesses, addresses, employees, users }
}
