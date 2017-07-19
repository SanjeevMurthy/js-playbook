var ORDER = {
  "Header" : {
    "name":"Header"
  },
  "Delivery":{
    "name":"Delivery"
  },
  "LineItems":{
    "name":"LineItems"
  }
};

var arr = ['Header','Delivery'];
var newOrder = arr.reduce((order,field)=>{
  order[field]=ORDER[field];
  return order;
},{});

console.log("newOrder ",newOrder);
