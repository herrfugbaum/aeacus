/* global describe, it, expect */
'use strict';

var isString = require('./index.js');

describe('isString', function () {
  it('should be defined', function () {
    expect(isString('')).toBeDefined();
  });

  it('should return true for a string', function () {
    expect(isString('')).toBe(true);
  });

  it('should return false if the passed argument is not a string ', function () {
    expect(isString({})).toBe(false);
  });
});