/* global describe, it, expect */
'use strict'

const dateIsAfter = require('./index.js')

describe('dateIsAfter', () => {
  it('should be defined', () => {
    expect(dateIsAfter('', '')).toBeDefined()
  })

  it('should return true if passed Date is after the passed comparison Date', () => {
    expect(dateIsAfter(new Date('1995,1,1'), new Date('1994,1,1'))).toBe(true)
  })

  it('should return false if the passed Date is before the passed comparison Date ', () => {
    expect(dateIsAfter(new Date('1994,1,1'), new Date('1995,1,1'))).toBe(false)
  })

  it('should return false if the passed Date is equal to the passed comparison Date ', () => {
    expect(dateIsAfter(new Date('1995,1,1'), new Date('1995,1,1'))).toBe(false)
  })
})
