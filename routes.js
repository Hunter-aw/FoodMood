const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Restaurants = require('./models/restModel');
let Cuisine = require('./models/cusines');
const router = express.Router()

router.post('/recommendations', (req, res) => {
    console.log(req.body.restaurantData)
    Restaurants.remove().exec()
    for (entry of JSON.parse(req.body.restaurantData)){
        console.log(entry)
        let newRecs = new Restaurants({
            recArray: entry
        })
        newRecs.save();
    }
    // newRecs.recArray.push(JSON.parse(req.body.restaurantData))
    res.send(Restaurants.find({}))
})

router.get('/test/:cuisine',(req,res)=>{
    let cuisineName = req.params.cuisine;
    Cuisine.findOne({cuisine_name:`${cuisineName}`},((err,data)=>{
        if(err){res.send(err)}
        else{res.send(data)};
    }))
})
router.get('/getRestaurants',function(req,res){
    Restaurants.findOne({},function(err,data){
        if(err){res.send(err)}
        else{res.send(data)}
    })
})

router.get('/voted/:id',function(req,res){
    let id = req.param.id
    Restaurants.update({id:id},{name: "guy"},function(err, response) {
        if (err) {
        res.send(err);
       } else {
        res.send(response);
       }
})
})





module.exports = router;