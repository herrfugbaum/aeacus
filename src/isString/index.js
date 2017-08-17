'use strict'

/**
* Checks if the provided value is of type `String`.
* @param {*} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const isString = (value) => {
  return typeof value === 'string'
}

module.exports = isString
