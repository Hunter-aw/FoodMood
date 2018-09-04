import host from './repository.js';
import renderer from './renderer.js';
import eventsHandler from './event_handler.js';
import AjaxRequester from './ajax_requester.js';
const repository = new host();
const render = new renderer();
const AjaxRequester = new AjaxRequester();
const eventHandler = new eventsHandler(repository,render);

eventHandler.showCuisines()

