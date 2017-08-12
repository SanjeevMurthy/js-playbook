/**
 * A custom MyError class
 * @class
 */
class MyError extends Error {
    /**
     * Constructs the MyError class
     * @param {String} message an error message
     * @constructor
     */
    constructor(message) {
        super(message);
        // properly capture stack trace in Node.js
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// test it

//MyError: test
try {
  let me =  new MyError('test');
  console.log(me instanceof Error);
  console.log(me);
} catch (e) {
  console.log(e);
} finally {

}

//console.log(err);
