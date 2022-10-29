const express = require('express');
const router = express.Router();
const Info = require('../models/info')

// Get Route handle for all info 
router.get('/', (req, re, nexts) => {
    res.send()
});

// add a new info to the db
router.post('/new', (req, res) => {
    Info.create(req.body).then((info) => {
        res.send(info);
    }).catch(next);
});

module.exports = router