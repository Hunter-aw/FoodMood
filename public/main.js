import host from './repository.js';
import renderer from './renderer.js';
import eventsHandler from './event_handler.js';
import AjaxRequester from './ajax_requester.js';
const render = new renderer();
const ajaxRequester = new AjaxRequester();
const repository = new host(ajaxRequester);
const eventHandler = new eventsHandler(repository, render);

eventHandler.showCuisinesforCity()
eventHandler.chooseCuisine()
eventHandler.searchCuisines()
eventHandler.hostRestaurantRender()


$("#addCity").click(function () {
    $('.header-pre').toggleClass('transform-active');
    $('.intro-text').toggle()
    $('.chosen-city').toggle()
});

// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//   event.preventDefault();
//   if (event.keyCode === 13) {
//     document.getElementById("myBtn").click();
//   }

$('.cityName').keypress(function (e) {
    var key = e.which;
    if(key == 13)  {
        $('#addCity').click();
        return false;  
    }
});
$('.cuisines').on('keypress', '.cuisineName', function (e) {
    var key = e.which;
    if(key == 13)  {
        $('#addCuisine').click();
        return false;  
    }
});     