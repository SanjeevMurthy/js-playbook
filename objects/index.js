import SizeOfObject from './object-size';

let per = {
  'name':'foo',
  'age':'10'
};

//let obj2 = obj1;
//let obj2 = Object.assign({},obj1);
//let obj2 = JSON.parse(JSON.stringify(obj1));
//obj2.place = 'bangalore';

// console.log('obj1 ',obj1);
// console.log('onj2 ',obj2);

var directedAcyclicGraph = {
    "left"  : { "left" : null, "right" : null, "data" :
    { "foo" : "bar",
      "key" : {
        "value" : "value1"
      }
    } },
    "data"  : 8
};
let obj3 = Object.assign({},directedAcyclicGraph);
console.log(obj3.left.data);
obj3.left.data.key.value = 'value2';

console.log(directedAcyclicGraph.left.data);
//directedAcyclicGraph["right"] = directedAcyclicGraph["left"];

//console.log(directedAcyclicGraph);

var cylicGraph = {
    "left"  : { "left" : null, "right" : null, "data" : 3 },
    "data"  : 8
};
cylicGraph["right"] = cylicGraph;

//console.log('right',SizeOfObject(cylicGraph.right.right));
