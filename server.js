const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const api = require('./routes')

mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

const app = express()
const socket = io()



app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);


app.listen(process.env.PORT || '8080', () => {
    console.log("Server listening on port 8080");
  });