//var http = require("http");
// var options = {
//   hostname: 'google.co.in',
//   port: 80,
//   path: '/',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'text/html',
//     'Content-Length': Buffer.byteLength("")
//   }
// };
//
// var req = http.request(options, (res) => {
//   res.on('data', (chunk) => {console.log("%s", chunk);});
//   res.on('end', () => {});
// });
//
// // write data to request body
// req.write("");
// req.end();


var http = require("http");
var options = {
  hostname: 'facebook.com',
  port: 80,
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength("")
  }
};

var req = http.request(options, (res) => {
  res.on('data', (chunk) => {console.log("%s", chunk);});
  res.on('end', () => {});
});

// write data to request body
req.write("abc");
req.end();
