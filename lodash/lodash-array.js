var _ = require('lodash');

var v0 = [501,502,503,505];
var v1 = [501,502,504,511,507,506];

// console.log(_.difference(v1,v0)); // added
// console.log(_.difference(v0,v1)); // deleted
// console.log(_.intersection(v0,v1)); //modified

var itemsV0 = [
  {"id":0,"name":"item0","qty":1},
  {"id":1,"name":"item1","qty":1},
  {"id":2,"name":"item2","qty":1},
  {"id":3,"name":"item3","qty":1},
  {"id":4,"name":"item3","qty":2}
];

var itemsV1 = [
  {"id":0,"name":"item0","qty":3},
  {"id":2,"name":"item2","qty":4},
  {"id":4,"name":"item3","qty":1},
  {"id":5,"name":"item3","qty":2}
];

let ids_V0 = itemsV0.reduce((ids,item)=>{
  ids.push(item.id);
  return ids;
},[]);
//console.log("ids",ids);
let ids_V1 = itemsV1.reduce((ids,item)=>{
  ids.push(item.id);
  return ids;
},[]);

let addedInV1 = _.difference(ids_V1,ids_V0);
let deletedInV1 = _.difference(ids_V0,ids_V1);
let retainedInV1 = _.intersection(ids_V1,ids_V0);

let modified = checkIfModified(retainedInV1,itemsV0,itemsV1);

//let addedInV1 = _.difference(itemsV1,itemsV0);

console.log("addedInV1 ",addedInV1);
console.log("deletedInV1 ",deletedInV1);
console.log("retainedInV1 ",retainedInV1);
console.log("Modified ",modified);
console.log("Added items",filterItems(addedInV1,itemsV1));
console.log("Deleted items",filterItems(deletedInV1,itemsV0));
function checkIfModified(retainedIds,version0,version1) {
  return retainedIds.reduce((modifiedItems,id)=>{
    let v0_item = _.find(version0,['id',id]);
    let v1_item = _.find(version1,['id',id]);
    if(v0_item.qty != v1_item.qty){
      modifiedItems.push(v1_item);
    }
    return modifiedItems;
  },[]);

}


function addedItems(addedInV1,version1){
  return addedInV1.reduce((items,id)=>{
    console.log("id",id);
     items.push(_.filter(version1,['id',id]));
    return items;
  },[]);
}

function deletedItems(deletedInV1,version0) {
  return deletedInV1.reduce((items,id)=>{
    items.push(_.filter(version0,['id',id]));
    return items;
  },[]);
}

function filterItems(ids,LineItems){
  return ids.reduce((items,id)=>{
    items.push(_.filter(LineItems,['id',id]));
    return items;
  },[]);
}
