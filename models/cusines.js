var mongoose = require('mongoose');

let cuisineSchema = new mongoose.Schema({
    cuisine_name: String,
    cuisine_id:Number
});



let Cuisine = mongoose.model('cuisine',cuisineSchema);

module.exports = Cuisine
