/* global describe, it, expect */
'use strict';

var isArray = require('./index.js');

describe('isArray', function () {
  it('should be defined', function () {
    expect(isArray([])).toBeDefined();
  });

  it('should return true for an array', function () {
    expect(isArray(['test', 'test'])).toBe(true);
  });

  it('should return false if the passed argument is not an array ', function () {
    expect(isArray({})).toBe(false);
  });
});