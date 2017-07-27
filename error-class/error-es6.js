// class ApplicationError extends Error {
//   constructor(message,status)
// }

const UNIQUE_KEY = Symbol('anything, really')
const object = {
  [UNIQUE_KEY]:'Data for UNIQUE_KEY',
  get[UNIQUE_KEY](){
    return this[UNIQUE_KEY];
  }
}
object[UNIQUE_KEY] = 'Data'
console.log(object.get());
