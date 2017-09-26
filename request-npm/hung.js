'use strict';

const request = require('request');
const http = require('http');
const querystring = require('querystring');

const data = {
    "Order":{
        "Header":{
        	"MartiniOrderId": "1629_7106"
        },
        "Delivery":[],
        "Customer":{
            "DxshId":97876,
            "Email":"User1@user.com"
        }
    }
};

// Using request
request(
    {
        method: 'POST',
        url: 'http://localhost:9000/order/v1/createorder',
        body : JSON.stringify(data),
        headers : {
          'Authorization':'clientid A1-0015',
          'Content-Type' : 'application/json'
        }
    },
    (error, responce, body) => {
        if (!error) {
            console.log('response from request',body);
            return;
        }
        console.log('error in request',error);
    }
);

// Using native http
let postData = querystring.stringify(data);

let options = {
    hostname: '127.0.0.1',
    port: 9000,
    path: '/order/v1/createorder',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'clientid A1-0011'
    },
    body : JSON.stringify(data)
};

let req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
