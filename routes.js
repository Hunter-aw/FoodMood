const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Restaurants = require('./models/restModel');
let Cuisine = require('./models/cusines');
const router = express.Router()

router.post('/recommendations', (req, res) => {
    console.log(req.body.restaurantData)
    let newRecs = new Restaurants({
        recArray: []
    });
    newRecs.recArray.push(JSON.parse(req.body.restaurantData))
    newRecs.save()
    console.log(newRecs.recArray)
    res.send(newRecs.recArray)
})

router.get('/test/:cuisine',(req,res)=>{
    let cuisineName = req.params.cuisine;
    Cuisine.findOne({cuisine_name:cuisineName},((err,data)=>{
        if(err){res.send(err)}
        else{res.send(data)};
    }))
})

const array = [{"cuisine_id":152, "cuisine_name":"African"}, {"cuisine_id":1, "cuisine_name":"American"}, {"cuisine_id":151, "cuisine_name":"Argentine"}, {"cuisine_id":3, "cuisine_name":"Asian"}, {"cuisine_id":193, "cuisine_name":"BBQ"}, {"cuisine_id":955, "cuisine_name":"Bagels"}, {"cuisine_id":5, "cuisine_name":"Bakery"}, {"cuisine_id":227, "cuisine_name":"BarFood"}, {"cuisine_id":132, "cuisine_name":"Belgian"}, {"cuisine_id":270, "cuisine_name":"Beverages"}, {"cuisine_id":159, "cuisine_name":"Brazilian"}, {"cuisine_id":182, "cuisine_name":"Breakfast"}, {"cuisine_id":133, "cuisine_name":"British"}, {"cuisine_id":247, "cuisine_name":"BubbleTea"}, {"cuisine_id":168, "cuisine_name":"Burger"}, {"cuisine_id":30, "cuisine_name":"Cafe"}, {"cuisine_id":491, "cuisine_name":"Cajun"}, {"cuisine_id":229, "cuisine_name":"Chilean"}, {"cuisine_id":25, "cuisine_name":"Chinese"}, {"cuisine_id":287, "cuisine_name":"Colombian"}, {"cuisine_id":928, "cuisine_name":"Creole"}, {"cuisine_id":881, "cuisine_name":"Crepes"}, {"cuisine_id":153, "cuisine_name":"Cuban"}, {"cuisine_id":203, "cuisine_name":"Danish"}, {"cuisine_id":192, "cuisine_name":"Deli"}, {"cuisine_id":100, "cuisine_name":"Desserts"}, {"cuisine_id":411, "cuisine_name":"DimSum"}, {"cuisine_id":541, "cuisine_name":"Diner"}, {"cuisine_id":959, "cuisine_name":"Donuts"}, {"cuisine_id":149, "cuisine_name":"Ethiopian"}, {"cuisine_id":40, "cuisine_name":"Fast Food"}, {"cuisine_id":298, "cuisine_name":"Fish and Chips"}, {"cuisine_id":318, "cuisine_name":"Fondue"}, {"cuisine_id":45, "cuisine_name":"French"}, {"cuisine_id":501, "cuisine_name":"Frozen Yogurt"}, {"cuisine_id":205, "cuisine_name":"Georgian"}, {"cuisine_id":134, "cuisine_name":"German"}, {"cuisine_id":156, "cuisine_name":"Greek"}, {"cuisine_id":181, "cuisine_name":"Grill"}, {"cuisine_id":521, "cuisine_name":"Hawaiian"}, {"cuisine_id":143, "cuisine_name":"Healthy Food"}, {"cuisine_id":233, "cuisine_name":"Ice Cream"}, {"cuisine_id":148, "cuisine_name":"Indian"}, {"cuisine_id":140, "cuisine_name":"Iranian"}, {"cuisine_id":218, "cuisine_name":"Israeli"}, {"cuisine_id":55, "cuisine_name":"Italian"}, {"cuisine_id":207, "cuisine_name":"Jamaican"}, {"cuisine_id":60, "cuisine_name":"Japanese"}, {"cuisine_id":265, "cuisine_name":"Jewish"}, {"cuisine_id":164, "cuisine_name":"Juices"}, {"cuisine_id":178, "cuisine_name":"Kebab"}, {"cuisine_id":67, "cuisine_name":"Korean"}, {"cuisine_id":70, "cuisine_name":"Mediterranean"}, {"cuisine_id":73, "cuisine_name":"Mexican"}, {"cuisine_id":137, "cuisine_name":"Middle Eastern"}, {"cuisine_id":74, "cuisine_name":"Mongolian"}, {"cuisine_id":147, "cuisine_name":"Moroccan"}, {"cuisine_id":321, "cuisine_name":"Pacific"}, {"cuisine_id":82, "cuisine_name":"Pizza"}, {"cuisine_id":219, "cuisine_name":"Polish"}, {"cuisine_id":87, "cuisine_name":"Portuguese"}, {"cuisine_id":983, "cuisine_name":"PubFood"}, {"cuisine_id":361, "cuisine_name":"PuertoRican"}, {"cuisine_id":320, "cuisine_name":"Ramen"}, {"cuisine_id":84, "cuisine_name":"Russian"}, {"cuisine_id":998, "cuisine_name":"Salad"}, {"cuisine_id":601, "cuisine_name":"Salvadorean"}, {"cuisine_id":304, "cuisine_name":"Sandwich"}, {"cuisine_id":210, "cuisine_name":"Scottish"}, {"cuisine_id":83, "cuisine_name":"Seafood"}, {"cuisine_id":461, "cuisine_name":"SoulFood"}, {"cuisine_id":267, "cuisine_name":"South African"}, {"cuisine_id":972, "cuisine_name":"SouthAmerican"}, {"cuisine_id":471, "cuisine_name":"Southern"}, {"cuisine_id":966, "cuisine_name":"Southwestern"}, {"cuisine_id":89, "cuisine_name":"Spanish"}, {"cuisine_id":141, "cuisine_name":"Steak"}, {"cuisine_id":177, "cuisine_name":"Sushi"}, {"cuisine_id":211, "cuisine_name":"Swedish"}, {"cuisine_id":997, "cuisine_name":"Taco"}, {"cuisine_id":190, "cuisine_name":"Taiwanese"}, {"cuisine_id":179, "cuisine_name":"Tapas"}, {"cuisine_id":163, "cuisine_name":"Tea"}, {"cuisine_id":150, "cuisine_name":"Tex-Mex"}, {"cuisine_id":95, "cuisine_name":"Thai"}, {"cuisine_id":142, "cuisine_name":"Turkish"}, {"cuisine_id":308, "cuisine_name":"Vegetarian"}, {"cuisine_id":99, "cuisine_name":"Vietnamese"}]
Cuisine.insertMany(array, function(err, rests){if (err) {res.send(err)}})
module.exports = router;