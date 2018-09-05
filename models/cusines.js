var mongoose = require('mongoose');

let cuisineSchema = new mongoose.Schema({
    name: String,
    id:Number
});


let Cuisine = mongoose.model('cuisine',cuisineSchema);

module.exports = Cuisine
