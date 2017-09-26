function resolving(num){
  return new Promise((resolve,reject)=>{
    if(num > 10){
      resolve('Valid');
      console.log('Valid Number');
    }else{
      return reject('Invalid');
      console.log('InValid Number');
    }
  });
}



resolving(8).then(value =>{
  console.log(value);
}).catch(reason =>{
  console.log(reason);
})
