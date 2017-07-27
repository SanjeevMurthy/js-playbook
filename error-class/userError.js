'use strict'
const { get } = require('lodash/fp')
const MESSAGE_FOR_USER = Symbol('userError')

const userError = message => {
  const error = Error(message)
  Object.defineProperty(error, MESSAGE_FOR_USER, { get() { return message } });
  if (Error.captureStackTrace) Error.captureStackTrace(error, userError)
  return error
}

const getMessage = get(MESSAGE_FOR_USER)
console.log("MESSAGE_FOR_USER ",MESSAGE_FOR_USER);
console.log("getMessage ",getMessage);
Object.assign(userError, {
  getMessage,
})
console.log("userError body ",userError);
console.log("userError.getMessage ",userError.getMessage);

module.exports = userError
