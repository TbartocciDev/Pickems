var express = require('express');
var router = express.Router();
var signUpCtrl = require('../controllers/account')

router.get('/sign-up', signUpCtrl.showSignUp) 

module.exports = router;
