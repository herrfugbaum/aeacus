'use strict';

var expectString = require('../utils/expectString');
var stringIsEmpty = require('../stringIsEmpty');

/**
* Checks if the provided string is not empty.
* @param {string} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

var stringIsNotEmpty = function stringIsNotEmpty(str) {
  expectString(str);
  return !stringIsEmpty(str);
};

module.exports = stringIsNotEmpty;