class AppError extends Error {
  constructor(code,message,status) {
    super(message);
    this.name = this.name;
    this.code = code;
    this.status = status || 500;
    if(Error.captureStackTrace){
      Error.captureStackTrace(this,this.constructor)
    }
    return this;
  }
}

let BusinessError = new AppError("COS_1001","No order Found",404)
if(BusinessError instanceof AppError){
  console.log("instance of AppError");
}
console.log("BusinessError ",Object.getOwnPropertyNames(BusinessError));
console.log("stack ",BusinessError.stack);
console.log("message",BusinessError.message);
console.log(BusinessError);
