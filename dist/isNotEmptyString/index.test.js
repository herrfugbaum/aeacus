/* global describe, it, expect */
'use strict';

var isNotEmptyString = require('./index.js');

describe('isNotEmptyString', function () {
  it('should be defined', function () {
    expect(isNotEmptyString('')).toBeDefined();
  });

  it('should return false for an empty string', function () {
    expect(isNotEmptyString('')).toBe(false);
  });

  it('should return true for a string that is not empty', function () {
    expect(isNotEmptyString('test')).toBe(true);
  });

  it('should throw a `TypeError` if the type of the passed argument is not a string', function () {
    expect(function () {
      isNotEmptyString(['test1', 'test2']);
    }).toThrowError(TypeError);
  });
});