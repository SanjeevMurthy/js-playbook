var express = require('express')
var responseTime = require('response-time')

var app = express()
var options = {
  digits:3,
  header:'X-TESCO-Response-Time',
  suffix:true
};
app.use(responseTime(options))

app.get('/', function (req, res) {
  res.send(req.method)
})

app.listen(8000,(req,res)=>{
  console.log('App started on port - 8000');
})
