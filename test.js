'use strict'

const test = require('tape')
const { add, sayHello } = require('./')

test('sayHello - anonymous', t => {
  const result = sayHello()
  t.equal(result, 'Hello anonymous', 'it should greet anonymous by default')
  t.end()
})

test('sayHello - name', t => {
  const result = sayHello('Julian')
  t.equal(result, 'Hello Julian', 'it should greet by name')
  t.end()
})

test('add(1,2) == 3', t => {
  const result = add(1,2)
  t.equal(result, 3)
  t.end()
})

test('add("1", "2") == 3', t => {
  const result = add("1", "2")
  t.equal(result, 3)
  t.end()
})
