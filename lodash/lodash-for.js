var _ = require('lodash');

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

var obj= _.forOwn(new Foo, function(value, key) {
  Foo.add = "added";
});

console.log(obj);
