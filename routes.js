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

router.get('/test',(req,res)=>{
    Cuisine.findOne({cuisine_name:"Afghani"},function(err,data){
        res.send(data);
})
})
module.exports = router;