'use strict'

/**
* Checks if the provided date is after the provided comparison date.
* @param {date} date - The value to check.
* @param {data} comparisonDate - The value to check against.
* @returns {boolean}
* @author Pascal Spiesz <pascal@slamcode.com>
* @since 0.0.1
*/

const dateIsAt = (date, comparisonDate) => {
  return Date.parse(date) === Date.parse(comparisonDate)
}

module.exports = dateIsAt
