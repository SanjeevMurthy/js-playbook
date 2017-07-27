function AppError(code,message,status){
  var error = new Error(message);

  error.code = code;
  error.status = status;
  if(Error.captureStackTrace){
    Error.captureStackTrace(error,Error);
  }
  return error;
}

let BusinessError = new AppError("COS_1001","No Order Found",404);
console.log("BusinessError ",BusinessError);
