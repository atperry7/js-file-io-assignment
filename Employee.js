'use strict'

const fs = require('fs')
// import { readFile, writeFile } from 'fs'

const buffer2json =
  (buffer) =>
    JSON.parse(buffer.toString())

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
    const reader = fs.readFileSync(path)
    let emp = buffer2json(reader)
    return new this(emp.name, emp.title, emp.salary)
  }
}

module.exports = {
  Employee
}
