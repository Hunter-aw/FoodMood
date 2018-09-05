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


$("#addCity").click(function () {
    $('.header-pre').toggleClass('transform-active');
    $('.intro-text').toggle()
    $('.chosen-city').toggle()
});
