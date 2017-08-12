var _ = require('lodash');

// var Delivery = [ ];
//
// var deliveryArray = _.assign([],undefined,Delivery);
//
// deliveryArray.push(1);
// deliveryArray.push(5);
// console.log("deliveryArray ",deliveryArray);
// console.log("Delivery ",Delivery);

var existing = {
  id:1,
  type: 'Normal',
  price:2
}

var newItem = {
  id:1,
  type:'surcharge',
  InStorePrice: 4,
  price:3
}

var update = _.assign(newItem,existing);
console.log(update);
