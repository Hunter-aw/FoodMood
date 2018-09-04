const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Restaurants = require('./models/restModel');
const router = express.Router()

router.post('/recommendations', (req, res) => {
    console.log(req.body.restaurantData)
    let newRecs = new Restaurants({
        recArray: []
    });
    newRecs.recArray.push(req.body.restaurantData)
    newRecs.save()
    console.log(newRecs.recArray)
    res.send(newRecs.recArray)
})
module.exports = router;