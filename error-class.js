let error = new Error({"err_message":"New Error"});
console.log(error.message);
console.log(Object.getOwnPropertyNames(error));
console.log(error.stack);
console.log(error.code);


let refError = new ReferenceError()
console.log(refError);
