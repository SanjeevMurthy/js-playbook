'use strict'
const MESSAGE_FOR_USER = Symbol()
console.log("MESSAGE_FOR_USER ",MESSAGE_FOR_USER);

const userError = function(message) {
    const error = Error(message)
    Object.defineProperty(error, MESSAGE_FOR_USER, {
        get() {
            return message
        }
    })
    // Omit frames above userError
    if (Error.captureStackTrace) Error.captureStackTrace(error, userError)
    return error
}

const getMessage = e => e[MESSAGE_FOR_USER]
// Dummy function to examplify sending a message to the user
const send = msg => console.log(msg)
// -----
function foo() {
    throw userError('User be aware: Foo has been called.')
}

try {
  //console.log("Calling Foo");
    foo()
} catch (e) {
    const msg = getMessage(e)
    if (msg) {
        send(msg)
    } else {
        // Unexpected exception
        console.error(e)
    }
}
