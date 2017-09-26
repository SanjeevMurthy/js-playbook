var _ = require('lodash');
var arr = [
  {
    "Header":{
      "id":1,
      "name":"user1"
    },
    "Customer":{
      "name":"user1"
    }
  },
  {
    "Header":{
      "id":2,
      "name":"user2"
    },
    "Customer":{
      "name":"user2"
    }
  },
  {
    "Header":{
      "id":3,
      "name":"user3"
    },
    "Customer":{
      "name":"user3"
    }
  }
];

let filtered = arr.reduce((orders,item)=>{
  let header =  _.pick(item, ['Header']);
  orders.push(header);
  return orders;
},[])

// ids.reduce((items,id)=>{
//     items.push(_.find(LineItems,['ProductId',id]));
//     return items;
//   },[]);

//let filtered = _.pick(arr, ['Header']);
console.log(filtered);
