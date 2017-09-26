function testTry(num){
  if(num == 10){
    //console.log('throw TEN');
    throw 'TEN';
  }
  if(num == 10){
    //console.log('throw TEN');
    throw 'TENNNN'
  }
}

function test(){
  try {
    testTry(10);
  } catch (e) {
    console.log('caught exception ',e);
  }
}
test();
