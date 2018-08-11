'use strict'

function sayHello (name = 'anonymous') {
  return `Hello ${name}`
}

function add (a, b) {
  a = parseInt(a, 10)
  b = parseInt(b, 10)
  return a + b
}

module.exports = {
  sayHello,
  add
}
