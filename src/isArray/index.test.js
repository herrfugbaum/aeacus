/* global describe, it, expect */
'use strict'

const isArray = require('./index.js')

describe('isArray', () => {
  it('should be defined', () => {
    expect(isArray([])).toBeDefined()
  })

  it('should return true for an array', () => {
    expect(isArray(['test', 'test'])).toBe(true)
  })

  it('should return false if the passed argument is not an array ', () => {
    expect(isArray({})).toBe(false)
  })
})
