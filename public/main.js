import host from './repository.js';
import renderer from './renderer.js';
import eventsHandler from './event_handler.js';
const repository = new host();
const render = new renderer();
const eventHandler = new eventsHandler(repository,render);

eventHandler.showCuisines()

