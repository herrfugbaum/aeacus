/* global describe, it, expect */
'use strict'

const stringIsNotEmpty = require('./index.js')

describe('stringIsNotEmpty', () => {
  it('should be defined', () => {
    expect(stringIsNotEmpty('')).toBeDefined()
  })

  it('should return false for an empty string', () => {
    expect(stringIsNotEmpty('')).toBe(false)
  })

  it('should return true for a string that is not empty', () => {
    expect(stringIsNotEmpty('test')).toBe(true)
  })

  it('should throw a `TypeError` if the type of the passed argument is not a string', () => {
    expect(() => { stringIsNotEmpty(['test1', 'test2']) }).toThrowError(TypeError)
  })
})
