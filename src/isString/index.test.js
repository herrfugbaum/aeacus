/* global describe, it, expect */
'use strict'

const isString = require('./index.js')

describe('isString', () => {
  it('should be defined', () => {
    expect(isString('')).toBeDefined()
  })

  it('should return true for a string', () => {
    expect(isString('')).toBe(true)
  })

  it('should return false if the passed argument is not a string ', () => {
    expect(isString({})).toBe(false)
  })
})
