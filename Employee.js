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
    const reader = buffer2json(fs.readFileSync(path))
    return new this(reader.name, reader.title, reader.salary)
  }
}

module.exports = {
  Employee
}
