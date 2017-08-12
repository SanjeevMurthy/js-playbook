var _ = require('lodash');

var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});




var itemsV0 = [
  {"id":0,"name":"item0","qty":1},
  {"id":1,"name":"item1","qty":1},
  {"id":2,"name":"item2","qty":1},
  {"id":3,"name":"item3","qty":1}
];

var itemsV1 = [
  {"id":0,"name":"item0","qty":3},
  {"id":1,"name":"item2","qty":4},
  {"id":2,"name":"item3","qty":0},
  {"id":3,"name":"item3","qty":2},
  {"id":4,"name":"item3","qty":2}
];


for(let item1 of itemsV1){
  //console.log('item1 ',item1);
    let item0_index = _.findIndex(itemsV0,['id',item1.id]);
    let item1_index = _.findIndex(itemsV1,['id',item1.id]);
    console.log('0 : ',item0_index,'1: ',item1_index);
    if(item1.qty === 0){
      console.log('Deleting item',item1.id);
      itemsV0.splice(item0_index,1);
      itemsV1.splice(item1_index,1);
    }else if(item0_index !== -1){
      console.log('Replacing id : ',item1.id);
      itemsV0[item0_index]=itemsV1[item1_index];
    }
}

let finalItem = _.unionBy(itemsV1,itemsV0,'id');
//console.log('remaining ',remaining);

console.log('ELI',itemsV0);
// => [1, 3]
 console.log('\n\n');
console.log('NLI',itemsV1);

console.log('\n\n');
console.log('FINAL',finalItem);


var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age == 41; });
