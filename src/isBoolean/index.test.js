/* global describe, it, expect */
'use strict'

const isBoolean = require('./index.js')

describe('isBoolean', () => {
  it('should be defined', () => {
    expect(isBoolean('')).toBeDefined()
  })

  it('should return true for a boolean', () => {
    expect(isBoolean(true)).toBe(true)
  })

  it('should return false if the passed argument is not a boolean ', () => {
    expect(isBoolean({})).toBe(false)
  })
})
