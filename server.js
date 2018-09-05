const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);
const api = require('./routes');
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/foodmoood', function() {
  console.log("DB connection established!!!");
})

var array = [];
io.sockets.on('connection', newConnection);
function newConnection(socket){
  socket.on('newUser',newUser);
  function newUser(name){
    array.push(name);
    io.sockets.emit('newUser',array)}
}

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);


server.listen(process.env.PORT || '8080', () => {
    console.log("Server listening on port 8080");
  });