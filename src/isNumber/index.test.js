/* global describe, it, expect */
'use strict'

const isNumber = require('./index.js')

describe('isNumber', () => {
  it('should be defined', () => {
    expect(isNumber(1)).toBeDefined()
  })

  it('should return true for a number', () => {
    expect(isNumber(1)).toBe(true)
  })

  it('should return false if the passed argument is not a number ', () => {
    expect(isNumber({})).toBe(false)
  })
})
