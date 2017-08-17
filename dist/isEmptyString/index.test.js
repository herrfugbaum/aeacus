/* global describe, it, expect */
'use strict';

var isEmptyString = require('./index.js');

describe('isEmptyString', function () {
  it('should be defined', function () {
    expect(isEmptyString('')).toBeDefined();
  });

  it('should return true for an empty string', function () {
    expect(isEmptyString('')).toBe(true);
  });

  it('should return false for a string that is not empty', function () {
    expect(isEmptyString('test')).toBe(false);
  });

  it('should throw a `TypeError` if the type of the passed argument is not a string', function () {
    expect(function () {
      isEmptyString(['test1', 'test2']);
    }).toThrowError(TypeError);
  });
});