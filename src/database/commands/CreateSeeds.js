import faker from 'faker'
import fs from 'fs'
import chalk from 'chalk'
import TestEmployees from '../data/TestEmployees'
import TestBusiness from '../data/TestBusiness'

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

const createBusinesses = lenOfItems => {
  const businesses = [TestBusiness]
  for (let i = 0; i < lenOfItems; i++) {
    const business = {
      name: faker.company.companyName(),
      address: {
        address_line: faker.address.streetAddress(),
        zip_code: faker.address.zipCode(),
        city: faker.address.city(),
        state: faker.address.city(),
        cc: faker.address.countryCode()
      },
      hours: createTimes(),
      employees: [],
      phone_number: faker.phone.phoneNumber()
    }
    businesses.push(business)
  }
  writeToJSONFile('Businesses', JSON.stringify(businesses, null, 2))
}

const createEmployee = lenOfItems => {
  let employees = [...TestEmployees]

  for (let index = 0; index < lenOfItems; index++) {
    const employee = {
      name: faker.name.findName(),
      profile_img: faker.image.avatar(),
      email: faker.internet.email(),
      business_id: null,
      isAdmin: faker.random.boolean()
    }
    employees.push(employee)
  }
  writeToJSONFile('Employees', JSON.stringify(employees, null, 2))
}

const createUsers = lenOfItems => {
  let users = []
  for (let index = 0; index < lenOfItems; index++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password_digest: faker.random.uuid(),
      isVerified: faker.random.boolean()
    }
    users.push(user)
  }
  writeToJSONFile('Users', JSON.stringify(users, null, 2))
}

const writeToJSONFile = (filename, data) =>
  fs.writeFile(
    `${process.cwd()}/./src/database/data/${filename}.json`,
    data,
    err => {
      if (err) throw err
    }
  )

export const CreateSeedFiles = () => {
  console.info(chalk.greenBright('Generating Seed Data'))
  const lenOfItems = 400
  createBusinesses(lenOfItems)
  createEmployee(lenOfItems)
  createUsers(lenOfItems)
}
