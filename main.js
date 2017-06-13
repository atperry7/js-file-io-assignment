'use strict'

const util = require('util')
const path = require('path')
const { Employee } = require('./Employee')

const employee =
  Employee
    .parseFromFilePath(
      path.resolve(__dirname, 'employee.json')
    )

employee.then(e => console.log(`is Employee? ${e instanceof Employee}`))
employee.then(e => console.log(`parsed: ${util.inspect(e)}`))
employee.then(e => { e.promote('chief petty grunt', 10) })
employee.then(e => console.log(`after promotion: ${util.inspect(e)}`))
