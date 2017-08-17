/* global describe, it, expect */
'use strict'

const expectString = require('./expectString.js')
const errorMessages = require('../constants/errorMessages.js')

describe('expectString', () => {
  it('should be defined', () => {
    expect(expectString('')).toBeDefined()
  })

  it('should return true for a string', () => {
    expect(expectString('')).toBe(true)
  })

  it('should throw a `TypeError` if the type of the passed argument is not a string', () => {
    expect(() => { expectString(['test1', 'test2']) }).toThrowError(TypeError)
  })

  it('should show the correct error message to the user on malformed input', () => {
    expect(() => { expectString(['test1', 'test2']) }).toThrowError(errorMessages.expectedString)
  })
})
