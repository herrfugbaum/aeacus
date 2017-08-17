'use strict';

var expectString = require('../utils/expectString');

/**
* Checks if the provided string is empty.
* @param {string} value - The value to check.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

var stringIsEmpty = function stringIsEmpty(str) {
  expectString(str);
  return str === '' && str.length === 0;
};

module.exports = stringIsEmpty;