/* eslint-disable no-undef */
const { expect } = require('@jest/globals')
const { factorialize, repeatStringNumTimes, convertToF, findElement } = require('./index')

//  Test for factorialize
test('Check factorialize is a function', () => {
  expect(typeof factorialize).toEqual('function')
})

test('should return factorial of n', () => {
  expect(factorialize(5)).toBe(120)
})


//  Test for repeatStringNumTimes
test('Check repeatStringNumTimes is a function', () => {
  expect(typeof repeatStringNumTimes).toEqual('function')
})

test('should return string by number of times provided by number', () => {
  expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc')
})

// Test for convertToF
test('Check convertToF is a function', () => {
  expect(typeof convertToF).toEqual('function')
})

test('should convert celsius to farenheight', () => {
  expect(convertToF(30)).toEqual(86)
})

// Test for findElement
test('Check findElement is a function', () => {
  expect(typeof findElement).toEqual('function')
})

test('should return the first element in the function argument passed to be true in initial array', () => {
  expect(findElement([1, 2, 3, 4], num => num % 2 === 0)).toBe(2)
})