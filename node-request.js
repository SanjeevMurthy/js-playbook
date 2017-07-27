var  request = require('request-promise');

var options = {
  "uri":"http://localhost:9000/order/v1/getorder/",
  "method":"get",
  "qs":{
    "customerid":"224"
  }
};

async function getOrder(){
  try {
    let order = await request(options);
    console.log("inside getOrder keys",order);
    return order;
  } catch (e) {
    return e;
  }
}

function caller(){
  getOrder().then(order =>{
    console.log("order");
  }).catch(exception =>{
    console.log("exception");
  })
}

caller();
