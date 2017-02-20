'use strict';

const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const request = require('request');


// Constants
const PORT = 80;
const apiVersion = 1;

// App
const app = express();

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.use('/public/components', express.static('./bower_components'));
app.use(express.static('./src'));

request('http://backend:8080/api/1/test', function (error, response, body) {
  if (!error) {
    console.log("API is available");
    console.log(body);
  } else {
    console.log("Failed to request the api");
  }
})


app.listen(PORT);
console.log('Webserver is running');
