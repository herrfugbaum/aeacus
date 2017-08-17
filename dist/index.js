'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _isString = require('./isString');
var _stringIsEmpty = require('./stringIsEmpty');
var _stringIsNotEmpty = require('./stringIsNotEmpty');
var _isArray = require('./isArray');
var _isNumber = require('./isNumber');
var _isObject = require('./isObject');
var _isBoolean = require('./isBoolean');
var _dateIsAfter = require('./dateIsAfter');
var _dateIsAt = require('./dateIsAt');
var _dateIsBefore = require('./dateIsBefore');

var validate = {
  isString: function isString(value) {
    return _isString(value);
  },
  stringIsEmpty: function stringIsEmpty(string) {
    return _stringIsEmpty(string);
  },
  stringIsNotEmpty: function stringIsNotEmpty(string) {
    return _stringIsNotEmpty(string);
  },
  isBoolean: function isBoolean(value) {
    return _isBoolean(value);
  },
  isArray: function isArray(value) {
    return _isArray(value);
  },
  isNumber: function isNumber(value) {
    return _isNumber(value);
  },
  isObject: function isObject(value) {
    return _isObject(value);
  },
  dateIsAfter: function dateIsAfter(date, comparisonDate) {
    return _dateIsAfter(date, comparisonDate);
  },
  dateIsAt: function dateIsAt(date, comparisonDate) {
    return _dateIsAt(date, comparisonDate);
  },
  dateIsBefore: function dateIsBefore(date, comparisonDate) {
    return _dateIsBefore(date, comparisonDate);
  }
};

var aeacus = function aeacus(event, methods, comparisonValue) {
  var test = methods.map(function (method) {
    if (typeof method === 'string') {
      return _defineProperty({}, event.target.name, {
        validationMethod: method,
        result: validate[method](event.target.value)
      });
    } else {
      var methodName = Object.keys(method)[0];
      var comparisonValues = method[methodName];
      var innerTest = comparisonValues.map(function (cV) {
        return _defineProperty({}, event.target.name, {
          validationMethod: methodName,
          comparisonValue: cV,
          result: validate[methodName](event.target.value, cV.toString())
        });
      });
      return innerTest;
    }
  });

  var results = test.reduce(function (a, b) {
    return [a].concat(b);
  });

  if (_isArray(results)) {
    var innerResults = Object.keys(results[0]).reduce(function (ret, key) {
      ret[key] = results.map(function (el) {
        return el[key];
      });
      return ret;
    }, {});

    return innerResults;
  } else {
    return results;
  }
};

module.exports = aeacus;