var express = require('express');

var router = express.Router();

// index route

// routing all the urls

router.use('/products',require('./products'))

module.exports = router;