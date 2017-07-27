'use strict'
const userError = require('./userError')
function foo() {
  throw userError('User be aware: Foo has been called.')
}
// Dummy function to examplify sending a message to the user
const send = msg => console.log(msg)
try { foo() }
catch (e) {
  console.log("e ",e);
  const msg = userError.getMessage(e)
  if (msg) { send(msg) }
  else {
    // Unexpected exception
    console.error(e)
  }
}
// User be aware: Foo has been called.
