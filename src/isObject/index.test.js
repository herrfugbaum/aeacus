/* global describe, it, expect */
'use strict'

const isObject = require('./index.js')

describe('isObject', () => {
  it('should be defined', () => {
    expect(isObject({})).toBeDefined()
  })

  it('should return true for a object', () => {
    expect(isObject({test: 'someValue'})).toBe(true)
  })

  it('should return false if the passed argument is not a object ', () => {
    expect(isObject('test')).toBe(false)
  })

  it('should return false if the passed argument is an array', () => {
    expect(isObject(['test1', 'test2'])).toBe(false)
  })
})
