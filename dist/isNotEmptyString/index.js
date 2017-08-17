'use strict';

var expectString = require('../utils/expectString');
var isEmptyString = require('../isEmptyString');

/**
* Checks if the provided string is not empty.
* @param {string} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

var isNotEmptyString = function isNotEmptyString(str) {
  expectString(str);
  return !isEmptyString(str);
};

module.exports = isNotEmptyString;