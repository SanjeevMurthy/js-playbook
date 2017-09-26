function throwFromTernery(num,ctx){
  if(num > 10){
    ctx.validNumber = true;
  }else{
    throw 'InvalidNumber';
  }
  let number = num + 10;
  return number;
}


try {
  let value = throwFromTernery(11,{});
  console.log('value ',value);
} catch (e) {
  console.log('exception ',e);
}
