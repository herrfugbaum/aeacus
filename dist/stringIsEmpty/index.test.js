/* global describe, it, expect */
'use strict';

var stringIsEmpty = require('./index.js');

describe('stringIsEmpty', function () {
  it('should be defined', function () {
    expect(stringIsEmpty('')).toBeDefined();
  });

  it('should return true for an empty string', function () {
    expect(stringIsEmpty('')).toBe(true);
  });

  it('should return false for a string that is not empty', function () {
    expect(stringIsEmpty('test')).toBe(false);
  });

  it('should throw a `TypeError` if the type of the passed argument is not a string', function () {
    expect(function () {
      stringIsEmpty(['test1', 'test2']);
    }).toThrowError(TypeError);
  });
});