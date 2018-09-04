const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Restaurants = require('./models/restModel');
const router = express.Router()

router.post('/recommendations', (req, res) => {
    let newRecs = new Restaurants({
        recArray: req.body.restData
    });
    newRecs.save()
    res.send(newRecs)
})
module.exports = router;