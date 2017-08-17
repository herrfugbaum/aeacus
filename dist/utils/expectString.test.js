/* global describe, it, expect */
'use strict';

var expectString = require('./expectString.js');
var errorMessages = require('../constants/errorMessages.js');

describe('expectString', function () {
  it('should be defined', function () {
    expect(expectString('')).toBeDefined();
  });

  it('should return true for a string', function () {
    expect(expectString('')).toBe(true);
  });

  it('should throw a `TypeError` if the type of the passed argument is not a string', function () {
    expect(function () {
      expectString(['test1', 'test2']);
    }).toThrowError(TypeError);
  });

  it('should show the correct error message to the user on malformed input', function () {
    expect(function () {
      expectString(['test1', 'test2']);
    }).toThrowError(errorMessages.expectedString);
  });
});