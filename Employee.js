'use strict'

const fs = require('fs')
// import { readFile, writeFile } from 'fs'

const buffer2json =
  (buffer) =>
    JSON.parse(buffer.toString())

const createEmpFromJson =
  data =>
    new Employee(data.name, data.title, data.salary)

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

  promote (title, salary) {
    this.title = title
    this.salary = salary
  }

  static parseFromFilePath (path) {
    // const reader = buffer2json(fs.readFileSync(path))
    // return new this(reader.name, reader.title, reader.salary)
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(createEmpFromJson(buffer2json(data)))
        }
      })
    })
  }
}

module.exports = {
  Employee
}
