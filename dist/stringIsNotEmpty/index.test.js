/* global describe, it, expect */
'use strict';

var stringIsNotEmpty = require('./index.js');

describe('stringIsNotEmpty', function () {
  it('should be defined', function () {
    expect(stringIsNotEmpty('')).toBeDefined();
  });

  it('should return false for an empty string', function () {
    expect(stringIsNotEmpty('')).toBe(false);
  });

  it('should return true for a string that is not empty', function () {
    expect(stringIsNotEmpty('test')).toBe(true);
  });

  it('should throw a `TypeError` if the type of the passed argument is not a string', function () {
    expect(function () {
      stringIsNotEmpty(['test1', 'test2']);
    }).toThrowError(TypeError);
  });
});