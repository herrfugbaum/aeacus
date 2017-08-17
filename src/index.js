'use strict'

const isString = require('./isString')
const stringIsEmpty = require('./stringIsEmpty')
const stringIsNotEmpty = require('./stringIsNotEmpty')
const isArray = require('./isArray')
const isNumber = require('./isNumber')
const isObject = require('./isObject')
const isBoolean = require('./isBoolean')
const dateIsAfter = require('./dateIsAfter')
const dateIsAt = require('./dateIsAt')
const dateIsBefore = require('./dateIsBefore')

const validate = {
  isString: (value) => isString(value),
  stringIsEmpty: (string) => stringIsEmpty(string),
  stringIsNotEmpty: (string) => stringIsNotEmpty(string),
  isBoolean: (value) => isBoolean(value),
  isArray: (value) => isArray(value),
  isNumber: (value) => isNumber(value),
  isObject: (value) => isObject(value),
  dateIsAfter: (date, comparisonDate) => dateIsAfter(date, comparisonDate),
  dateIsAt: (date, comparisonDate) => dateIsAt(date, comparisonDate),
  dateIsBefore: (date, comparisonDate) => dateIsBefore(date, comparisonDate)
}

const aeacus = (event, methods, comparisonValue) => {
  const test = methods.map(method => {
    if (typeof method === 'string') {
      return {
        [event.target.name]: {
          validationMethod: method,
          result: validate[method](event.target.value)
        }
      }
    } else {
      const methodName = Object.keys(method)[0]
      const comparisonValues = method[methodName]
      const innerTest = comparisonValues.map(cV => {
        return {
          [event.target.name]: {
            validationMethod: methodName,
            comparisonValue: cV,
            result: validate[methodName](event.target.value, cV.toString())
          }
        }
      })
      return innerTest
    }
  })

  const results = test.reduce((a, b) => {
    return [a].concat(b)
  })

  if (isArray(results)) {
    const innerResults = Object.keys(results[0]).reduce(function (ret, key) {
      ret[key] = results.map(function (el) { return el[key] })
      return ret
    }, {})

    return innerResults
  } else {
    return results
  }
}

module.exports = aeacus
