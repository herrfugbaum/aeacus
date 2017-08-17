'use strict'

/**
* Checks if the provided value is of type `Number`.
* @param {*} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const isNumber = (value) => {
  return typeof value === 'number'
}

module.exports = isNumber
