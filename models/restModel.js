var mongoose = require('mongoose');

// let restSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     averageCostForTwo: Number,
//     userRating: Number,
//     ratingColor: String,
//     image: String,
//     menuUrl: String
// });


let restRecSchema = new mongoose.Schema({
    recArray: Object
});

let Restaurants = mongoose.model('restaurant', restRecSchema)

module.exports = Restaurants
