'use strict'

/**
* Checks if the provided value is of type `Boolean`.
* @param {*} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const isBoolean = (value) => {
  return typeof value === 'boolean'
}

module.exports = isBoolean
