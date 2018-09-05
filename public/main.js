import host from './repository.js';
import renderer from './renderer.js';
import eventsHandler from './event_handler.js';
import AjaxRequester from './ajax_requester.js';
const render = new renderer();
const ajaxRequester = new AjaxRequester();
const repository = new host(ajaxRequester);
const eventHandler = new eventsHandler(repository,render);
var array = [];
var socket = io.connect('http://localhost:8080');
socket.on('newUser',alertUser);
function alertUser(name){
    $('.guy').empty();
$('.guy').append('<h1>'+name +'</h1>')
}
function newUser(){
    var name = prompt("what is your name?");
    socket.emit('newUser',name);
}
newUser();
eventHandler.showCuisinesforCity()
eventHandler.chooseCuisine()
eventHandler.searchCuisines()


$("#addCity").click(function() {
    $('.header-pre').toggleClass('transform-active');
    $('.intro-text').toggle()
    $('.chosen-city').toggle()
    $('.cuisine-form').toggle()
  });

