'use strict'

const isArray = require('../isArray')

/**
* Checks if the provided value is of type `Object`. <br />
* Returns false for Arrays!
* @param {*} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const isObject = (value) => {
  return typeof value === 'object' && !isArray(value)
}

module.exports = isObject
