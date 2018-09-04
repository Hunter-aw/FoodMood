const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

var app = express()

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT || '8080', () => {
    console.log("Server listening on port 8080");
  });