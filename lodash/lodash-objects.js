var _ = require('lodash');


var obj1 = {
  "name":{
    "firstname":"sanjeev",
    "lastname":"murthy"
  },
  "title":"mr",
  "company":"tesco",
  "languages":[
    "c","java","javascript"
  ],
  "address":{
  }
};

var obj2 = {
  "name":{
    "firstname":"sandeep"
  },
  "title":"mr",
  "languages":[
    "C#","C++"
  ]
};

var obj3 = {
  "title":"Mr",
  "company":"TESCO"
}


var isEmpty = _.isUndefined(obj2.address);
//var isNil = _.isNil(obj2.address.addr1);
console.log("isEmpty %s - isNil %s ",isEmpty);
// var name = _.assign(obj1.name,obj2.name);
// var languages = _.assign(obj1.languages,obj2.languages);
// obj2.name = name;
// obj2.languages = languages;
// var newObject = _.assign(obj1,obj2);
// console.log("New Object ",newObject);
