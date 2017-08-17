/* global describe, it, expect */
'use strict';

var isObject = require('./index.js');

describe('isObject', function () {
  it('should be defined', function () {
    expect(isObject({})).toBeDefined();
  });

  it('should return true for a object', function () {
    expect(isObject({ test: 'someValue' })).toBe(true);
  });

  it('should return false if the passed argument is not a object ', function () {
    expect(isObject('test')).toBe(false);
  });

  it('should return false if the passed argument is an array', function () {
    expect(isObject(['test1', 'test2'])).toBe(false);
  });
});