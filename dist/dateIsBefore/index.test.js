/* global describe, it, expect */
'use strict';

var dateIsBefore = require('./index.js');

describe('dateIsBefore', function () {
  it('should be defined', function () {
    expect(dateIsBefore('', '')).toBeDefined();
  });

  it('should return false if passed Date is after the passed comparison Date', function () {
    expect(dateIsBefore(new Date('1995,1,1'), new Date('1994,1,1'))).toBe(false);
  });

  it('should return true if the passed Date is before the passed comparison Date ', function () {
    expect(dateIsBefore(new Date('1994,1,1'), new Date('1995,1,1'))).toBe(true);
  });

  it('should return false if the passed Date is equal to the passed comparison Date ', function () {
    expect(dateIsBefore(new Date('1995,1,1'), new Date('1995,1,1'))).toBe(false);
  });
});