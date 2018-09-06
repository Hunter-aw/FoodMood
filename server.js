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
app.get('/test',function(req,res){
  if(array.length >= 10){
    res.sendfile('public2/error.html');
  }else
  res.sendfile('public2/users.html');
})
// var array = [];
// if(array.length > 10){
//   console.log("sorry cant hold more users");
// }else{
// io.sockets.on('connection', newConnection);
// function newConnection(socket){
//   socket.on('getNewUser',newUser);
//   function newUser(name){
//     array.push(name);
//     console.log(array);
//     io.sockets.emit('newUser',array)}
// }
// }


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);


server.listen(process.env.PORT, () => {
    console.log("Server listening on port 8080");
  });