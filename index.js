'use strict'

function sayHello (name = 'anonymous') {
  return `Hello ${name}`
}

function add (a, b) {
  a = parseInt(a)
  b = parseInt(b)
  return a + b
}

module.exports = {
  sayHello,
  add
}
