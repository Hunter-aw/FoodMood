import host from './repository.js';
import renderer from './renderer.js';
import eventsHandler from './event_handler.js';
import AjaxRequester from './ajax_requester.js';
var socket = io.connect('http://localhost:8080');
const render = new renderer();
const ajaxRequester = new AjaxRequester();
const repository = new host(ajaxRequester);
const eventHandler = new eventsHandler(repository, render);

eventHandler.showCuisinesforCity()
eventHandler.chooseCuisine()
eventHandler.searchCuisines()


$("#addCity").click(function () {
    $('.header-pre').toggleClass('transform-active');
    $('.intro-text').toggle()
    $('.chosen-city').toggle()
});

socket.on('newUser',newUser);
function newUser(name){
    $('.names').empty();
    for (let x in name) {
        $('.names').append('<h1 class="name col-sm-12">'+name[x]+'</h1>'); 
      }
      $('.names').each(function() {
        $(this).css({
            left: Math.random() * ($('.names').width() - $(this).width()),
            top: Math.random() * ($('.names').height() - $(this).height())
          });
      });
    
}