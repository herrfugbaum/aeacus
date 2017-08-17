'use strict'

/**
* Checks if the provided value is an `Array`. <br />
* Returns false for Objects!
* @param {*} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const isArray = (value) => {
  return Array.isArray(value)
}

module.exports = isArray
