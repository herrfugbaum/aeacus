'use strict'

const isString = require('../isString')
const errorMessages = require('../constants/errorMessages')

/**
* Expects the provided value to be of type `String`, else it will throw a TypeError. <br />
* Returns true if the provided value is of type `String`.
* @param {*} value - The value to check.
* @returns {(TypeError|true)}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/
const expectString = (value) => {
  if (!isString(value)) {
    throw new TypeError(errorMessages.expectedString)
  }
  return true
}

module.exports = expectString
