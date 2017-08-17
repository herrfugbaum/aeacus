/* global describe, it, expect */
'use strict';

var isBoolean = require('./index.js');

describe('isBoolean', function () {
  it('should be defined', function () {
    expect(isBoolean('')).toBeDefined();
  });

  it('should return true for a boolean', function () {
    expect(isBoolean(true)).toBe(true);
  });

  it('should return false if the passed argument is not a boolean ', function () {
    expect(isBoolean({})).toBe(false);
  });
});