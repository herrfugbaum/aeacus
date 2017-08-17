'use strict'

const expectString = require('../utils/expectString')
const stringIsEmpty = require('../stringIsEmpty')

/**
* Checks if the provided string is not empty.
* @param {string} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const stringIsNotEmpty = (str) => {
  expectString(str)
  return !stringIsEmpty(str)
}

module.exports = stringIsNotEmpty
