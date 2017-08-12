var _ = require('lodash');



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

// let ids_V0 = itemsV0.reduce((ids,item)=>{
//   ids.push(item.id);
//   return ids;
// },[]);
// //console.log("ids",ids);
// let ids_V1 = itemsV1.reduce((ids,item)=>{
//   ids.push(item.id);
//   return ids;
// },[]);

let ids_V0 = _.map(itemsV0,'id');
let ids_V1 = _.map(itemsV1,'id');
console.log('ids_V0 ',ids_V0);
console.log('ids_V1 ',ids_V1);


let modifiedIds = _.intersection(ids_V1,ids_V0);

let modifiedItems = checkIfModified(modifiedIds,itemsV0,itemsV1);


function checkIfModified(modifiedIds,version0,version1) {
  return modifiedIds.reduce((modifiedItems,id)=>{
    let v0_item = _.find(version0,['id',id]);
    let v1_item = _.find(version1,['id',id]);
    if(v1_item.qty === 0){

    }
    let updatedItem = _.assign(v0_item,v1_item);
    modifiedItems.push(v1_item);
    return modifiedItems;
  },[]);

}

console.log('Updated items ',modifiedItems);
