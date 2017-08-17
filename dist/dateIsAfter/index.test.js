/* global describe, it, expect */
'use strict';

var dateIsAfter = require('./index.js');

describe('dateIsAfter', function () {
  it('should be defined', function () {
    expect(dateIsAfter('', '')).toBeDefined();
  });

  it('should return true if passed Date is after the passed comparison Date', function () {
    expect(dateIsAfter(new Date('1995,1,1'), new Date('1994,1,1'))).toBe(true);
  });

  it('should return false if the passed Date is before the passed comparison Date ', function () {
    expect(dateIsAfter(new Date('1994,1,1'), new Date('1995,1,1'))).toBe(false);
  });

  it('should return false if the passed Date is equal to the passed comparison Date ', function () {
    expect(dateIsAfter(new Date('1995,1,1'), new Date('1995,1,1'))).toBe(false);
  });
});