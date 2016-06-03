var express = require('express');
var _ = require('lodash')
var api = express();

api.get('/',function (req,res,next) {
  res.send('HELLO WORLD')
})

api.get('/contacts',function (req,res,next) {
  res.send('get /contact')
})

api.get('/contacts/:name',function (req,res,next) {
  res.send('get /contact:name')
})

api.post('/contacts',function (req,res,next) {
  bodyparser.json(),
  function (req,res,next) {
    var contact = req.body.contact
    if(typeof contact !== 'Object')
    {
      return res.status(422).send('unprocess');
    }
      contact.push(contact);
      res.send(contact);
    }
})

api.delete('/contacts/:name',function (req,res,next) {
  var count = 0;
  contacts = _.remove (contacts, function (contact) {
    if(contact.name !== req.params.name){
      return false
    }
    count++
    return true;
  })
  })

api.put('/contacts/:name/:new',function (req,res,next) {
  var count = 0;
  contacts = contacts.map(function (contact) {
    if(contact.name === req.params.name){
      count++;
      contact.name = req.params.new
    }

  })
  res.send('post /contact')
})

console.log("API LISTENING");
api.listen(3000);

module.exports = api;
