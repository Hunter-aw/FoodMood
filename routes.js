const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Restaurants = require('./models/restModel');
let Cuisine = require('./models/cusines');
const router = express.Router()
let recommendationArray = []


router.post('/recommendations', (req, res) => {
    console.log(req.body.restaurantData)
    Restaurants.remove().exec()
    for (let entry of JSON.parse(req.body.restaurantData)){
        console.log(entry)
        let newRecs = new Restaurants({
            recArray: entry,
            _id: entry._id
        })
        newRecs.save();
        recommendationArray.push(entry)
    }
    // newRecs.recArray.push(JSON.parse(req.body.restaurantData))
    res.send("congrats")
})

router.get('/test/:cuisine',(req,res)=>{
    let cuisineName = req.params.cuisine;
    Cuisine.findOne({cuisine_name:`${cuisineName}`},((err,data)=>{
        if(err){res.send(err)}
        else{res.send(data)};
    }))
})
router.get('/getRestaurants',function(req,res){
    console.log(recommendationArray)
    res.send(recommendationArray)
})

router.get('/voted/:id',function(req,res){
    let id = req.params.id
    Restaurants.findOneAndUpdate({_id:id},{$inc:{"recArray.votes":1}},function(err, data) {
        if (err) {
        res.send(err);
       } else {
        res.send(data);
       }
})
})
router.get('/results',function(req,res){
    Restaurants.find(function(err,data){
        if(err){res.send(err)}
        else{res.send(data)}
    })
})





module.exports = router;