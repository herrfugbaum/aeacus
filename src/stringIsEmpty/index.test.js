/* global describe, it, expect */
'use strict'

const stringIsEmpty = require('./index.js')

describe('stringIsEmpty', () => {
  it('should be defined', () => {
    expect(stringIsEmpty('')).toBeDefined()
  })

  it('should return true for an empty string', () => {
    expect(stringIsEmpty('')).toBe(true)
  })

  it('should return false for a string that is not empty', () => {
    expect(stringIsEmpty('test')).toBe(false)
  })

  it('should throw a `TypeError` if the type of the passed argument is not a string', () => {
    expect(() => { stringIsEmpty(['test1', 'test2']) }).toThrowError(TypeError)
  })
})
