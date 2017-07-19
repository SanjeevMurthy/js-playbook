var Validator = require('jsonschema').Validator;
  var v = new Validator();


var arr = [
  {
    "FulfillmentId": 1,
    "FulfillmentType": "FT_DO",
    "ItemGroupCode": "DS",
    "LineType": "STANDARD",
    "ReservationID": "",
    "OrderedQty": "1",
    "ReqShipDate": "2015-04-17T12:28:00.0",
    "ShipNode": "WH_CMBRE",
    "SubLineNo": "1",
    "SCAC": "Carrier",
    "ScacAndService": "Carrier - TESCO_Standard-UKMainland",
    "TransactionalLineId": "sg34820097"
  }
];

var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {},
    "id": "http://example.com/example.json",
    "items": {
        "id": "/items",
        "properties": {
            "FulfillmentId": {
                "id": "/items/properties/FulfillmentId",
                "type": "integer"
            },
            "FulfillmentType": {
                "id": "/items/properties/FulfillmentType",
                "type": "string"
            },
            "ItemGroupCode": {
                "id": "/items/properties/ItemGroupCode",
                "type": "string"
            },
            "LineType": {
                "id": "/items/properties/LineType",
                "type": "string"
            },
            "OrderedQty": {
                "id": "/items/properties/OrderedQty",
                "type": "string"
            },
            "ReqShipDate": {
                "id": "/items/properties/ReqShipDate",
                "type": "string"
            },
            "ReservationID": {
                "id": "/items/properties/ReservationID",
                "type": "string"
            },
            "SCAC": {
                "id": "/items/properties/SCAC",
                "type": "string"
            },
            "ScacAndService": {
                "id": "/items/properties/ScacAndService",
                "type": "string"
            },
            "ShipNode": {
                "id": "/items/properties/ShipNode",
                "type": "string"
            },
            "SubLineNo": {
                "id": "/items/properties/SubLineNo",
                "type": "string"
            },
            "TransactionalLineId": {
                "id": "/items/properties/TransactionalLineId",
                "type": "string"
            }
        },
        "type": "object"
    },
    "type": "array"
};

console.log(v.validate(arr,schema));
