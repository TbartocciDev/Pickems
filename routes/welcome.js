var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/welcome')

router.get('/', homeCtrl.show) 

module.exports = router;
