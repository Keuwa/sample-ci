var express = require('express');

var api = express();

api.get('/',function (req,res,next) {
  res.send('HELLO WORLD')
})

api.get('/contact',function (req,res,next) {
  res.send('hey')
})

console.log("API LISTENING");
api.listen(3000);

module.exports = api;
