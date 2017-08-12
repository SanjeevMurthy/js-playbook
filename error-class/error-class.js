class AppError extends Error {
  constructor(code,message,status = 500) {
    super(message);
    this.err_message=message;
    this.name = this.constructor.name;
    this.code = code;
    this.status = status;
    if(Error.captureStackTrace){
      Error.captureStackTrace(this,this.constructor)
    }
  }

  getInfo(){
    return {
      err_message : this.err_message,
      err_code : this.code,
      status : this.status,
    }
  }
}

class BusinessError extends AppError {
  constructor(error,info = {}){
    //console.log('error in constructor ',error);
    let {code , message, status } = error;
    super(code,message,status);
    this.name = this.constructor.name;
    //this.method = 'GET';
    //let extra = ...extraInfo;
    this.info = Object.assign({},info);
    // if(info){
    //   this.info = {};
    //   for (var variable in info) {
    //     if (info.hasOwnProperty(variable)) {
    //       this.info[variable]=info[variable];
    //     }
    //   }
      // this.method = info.method,
      // this.operation = info.operation
    //}
    if(Error.captureStackTrace){
      Error.captureStackTrace(this,this.constructor)
    }
  }

  getInfo(){
    return {
      err_message : this.err_message,
      err_code : this.code,
      status : this.status,
      info : this.info || { }
    };
  }
}

let err = {
  code : "COS_1001",
  message : "No order Found",
  status : 404
};

let businessError = new BusinessError(err)
if(businessError instanceof BusinessError){
  console.log("instance of BusinessError");
}

function throwError(){
  throw new businessError;
}
//console.log("BusinessError ",Object.getOwnPropertyNames(businessError));
//console.log("stack ",businessError.stack);
//console.log("message",businessError.message);
// try {
//   let err = JSON.parse(businessError);
//   console.log(err);
// } catch (e) {
//   console.log(e);
// } finally {
//
try {
  throwError();
} catch (e) {
  let info = e.getInfo();
  console.log(info);
} finally {

}

// }
//console.log(businessError.getInfo());
//console.log(businessError.stack);
