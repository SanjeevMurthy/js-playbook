// var Validator = require('jsonschema').Validator;
//   var v = new Validator();
//   var instance = 4;
//   var schema = {"type": ""};
//   console.log(v.validate(instance, schema));
//
// console.log("Simpler one");
//   var validate = require('jsonschema').validate;
//  console.log(validate(4, {"type": "number"}));


//var Validator = require('jsonschema').Validator;

import {Validator} from 'jsonschema';
  var v = new Validator();

  // Address, to be embedded on Person
  var addressSchema = require('./address-schema');

  // Person
  var schema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "address": {"$ref": "/SimpleAddress"},
      "votes": {"type": "string", "format":"date-time"}
    }
  };

  var p = {
    "name": "Barack Obama",
    "address": {},
    "votes": "2016-04-21T08:26:46.043888+01:00"
  };

  v.addSchema(addressSchema, '/SimpleAddress');
  var result = v.validate(p, schema);
  console.log(result.errors[0].property)
  console.log(result.errors[0].message)



//   {
//   instance: {
//     name: 'Barack Obama',
//     address: {},
//     votes: '2016-04-21T08:26:46.043888+01:00'
//   },
//   schema: {
//     id: '/SimplePerson',
//     type: 'object',
//     properties: {
//       name: [Object],
//       address: [Object],
//       votes: [Object]
//     }
//   },
//   propertyPath: 'instance',
//   errors: [
//     ValidationError {
//        property: 'instance.address',
//        message: 'requires property "country"',
//        schema: '/SimpleAddress',
//        instance: {},
//        name: 'required',
//        argument: 'country',
//        stack: 'instance.address requires property "country"' }
//      ],
//   throwError: undefined,
//   disableFormat: false
// }
