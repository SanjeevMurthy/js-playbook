function promise10(num){
  return new Promise((resolve,reject)=>{
    console.log('Called promise10');
    if(num>10){
      setTimeout(function(){
        console.log('resolving promise10');
        resolve(num+10);
      },4000);
    }else{
      reject(num);
    }
  });
}


function promise20(num){
  return new Promise((resolve,reject)=>{
    console.log('Called promise20');
    if(num>20){
      setTimeout(function(){
        console.log('resolving promise20');
        resolve(num+20);
      },2000);

    }else{
      reject(num);
    }
  });
}

function promise30(num){
  console.log('Called promise30');
  return new Promise((resolve,reject)=>{
    if(num>30){
      setTimeout(function(){
        console.log('resolving promise30');
        resolve(num+30);
      },3000);

    }else{
      reject(num);
    }
  });
}



async function getAll(num10, num20, num30){
  let allAtOnce = [
     promise10(num10),
     promise20(num20),
     promise30(num30)
  ];
  console.log('allAtOnce \n\n',allAtOnce);
  let result = await Promise.all(allAtOnce);
  console.log('\n\nresult ',result);
  return result;
}


getAll(11,21,31).then(result =>{
  console.log('getAllResult ',result);
}).catch(reason => {
  console.log('reason ',reason);
})
