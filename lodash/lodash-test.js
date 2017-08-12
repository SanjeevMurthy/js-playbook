var _ = require('lodash');

function checkMissingAttributes(object,callback){
  var attributes = _.reduce(object, function(result, value, key) {
      if(_.isNil(value)){
        result.push(key);
      }
      return result;
    }, []);

  callback(null,attributes);
}



function check(object){
  checkMissingAttributes(object,function(err,result){
    console.log(result);
  })
}

var obj = { 'a': undefined, 'b': 2, 'c': null };


check(obj);
