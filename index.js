'use strict'

function sayHello (name = 'anonymous') {
  return `Hello ${name}`
}

function add (a, b) {
  return a + b
}

module.exports = {
  sayHello,
  add
}
