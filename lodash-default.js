var _ = require('lodash');

function assignDefaults(object){

  var src = {
    "name":"sanju",
    "age":25
  };

  let keys = Object.getOwnPropertyNames(src);
  console.log("Keys ",keys);
  let newObject = copy(keys,src,object);
  console.log("newObject ",newObject);
}


function copyDefaults(src,dest){
  for(var key in src) {
    if (src.hasOwnProperty(key)) {
        dest[key] = dest[key] || src[key]
    }
  }
  return dest;
}

function copy(keys,src,dest){
  let noOfKeys = keys.length;
  for(var key in src) {
    if (src.hasOwnProperty(key)) {
        dest[key] = dest[key] || src[key]
        console.log("Keys remaining ",noOfKeys);
        if(--noOfKeys === 0){
          return dest;
        }
    }
  }
}

var dest = {
  "name":"",
  "age":"",
  "title":"mr"
}


assignDefaults(dest);
