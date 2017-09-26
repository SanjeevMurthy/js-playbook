var _ = require('lodash');

let req = {
  query : null
};

if(!req.query || _.isEmpty(req.query.id)){
  console.log('customerid is empty');
}else{
  console.log('not empty');
}
