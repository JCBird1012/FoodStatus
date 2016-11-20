#!/usr/bin/env node
'use strict'

var http = require('http');
var express = require('express');
var json = require('easyjson');
var moment = require('moment');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('website'));
app.use(express.static('data'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/data/update', function(req, res) {
   var update = req.body.available;
   var id = req.body.id
   process(id, update, res);
});

app.get('/data/info', function(req, res) {
   var id = req.query.id;
   
    if (id === undefined)
      {
         res.send(json.path('data/data.json').get('results'));
      }
   
   else 
   {
      id = parseInt(id);
      
      if (isNaN(id) || !(id >= 0 && id <= 3))
      {
         res.status(400);
         res.send("ID isn't an acceptable dining hall ID.");
      }
      
      else
      {
         res.send(json.path('data/data.json').get('results[' + id + ']'));
      }
    
   }
});

function process(id, update, res)
{
   var value = json.path('data/data.json').get ('results[' + id + '][available]');
   id = parseInt(id);
   var last_updated = json.path('data/data.json').get ('results[' + id + '][last_updated]');
   var availability = json.path('data/data.json').get ('results[' + id + '][availability]');
   
   if (update != "true" && update != "false")
      {
         res.status(400);
         res.send("Available isn't a valid boolean.");
      }
   
   else if (isNaN(id) || !(id >= 0 && id <= 3))
      {
         res.status(400);
         res.send("ID isn't an acceptable dining hall ID.");
      }
   
   else
      {
         if (value.toString() === update)
            {
                  json.path('data/data.json').modify('results[' + id + '][last_updated]', moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
               res.send("Last updated renewed.");
            }
         
         //You'll get a deprecation warning from moment here... That's fine (it doesn't break anything, yet...)
         else if (moment().diff(moment(last_updated, ["dddd, MMMM Do YYYY, h:mm:ss a"]), 'hours') >= 6)
            {
               //Update the availbility data... Since update is treated as a string, and we want it as a boolean, we check to ensure it equals true.
               json.path('data/data.json').modify('results[' + id + '][available]', (update === 'true'));
               json.path('data/data.json').modify('results[' + id + '][last_updated]', moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
                 json.path('data/data.json').modify('results[' + id + '][availability]', moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
               res.send("Updated.");
            }
        
         else
            {
                res.send("At least six hours must elapse from latest availability update before status can be changed.");
            }
      }
}

app.listen(8080, function () {
  console.log('listening on port 8080');
});