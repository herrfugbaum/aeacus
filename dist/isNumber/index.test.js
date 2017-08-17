/* global describe, it, expect */
'use strict';

var isNumber = require('./index.js');

describe('isNumber', function () {
  it('should be defined', function () {
    expect(isNumber(1)).toBeDefined();
  });

  it('should return true for a number', function () {
    expect(isNumber(1)).toBe(true);
  });

  it('should return false if the passed argument is not a number ', function () {
    expect(isNumber({})).toBe(false);
  });
});