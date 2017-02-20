'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const colors = require('colors');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const apiVersion = 1;

// App
const app = express();

app.get('/api/' + apiVersion + '/test', function(req, res) {
  console.log('REQUEST ~~~ [GET] '.yellow  + 'GET TEST');
  res.send('Hello world');
});

var url = 'mongodb://database:27017';

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully connected to database");
  }
  db.close();
});


app.listen(8080);
console.log('Api is running');
