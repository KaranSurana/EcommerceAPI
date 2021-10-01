var express = require('express');

var router = express.Router();

var controller = require('../controllers/mainController');

router.get('/',controller.index);

router.post('/create',controller.create);

router.delete('/',controller.delete);

module.exports = router;