var express = require('express');
var router = express.Router();
var Globals = require('../models/globals');
var Challenge = require('../models/challenge');
var User = require('../models/user');

/* GET home page. */
router.get('/rtfm', function(req, res) {   
    var logged = Globals.User.islogged(); 
    if(logged==true){
        res.render('rtfm');        
    }
    else{
        res.write('<html><body>You are not autorized to view this page!</body></html>');
    }
});

module.exports = router;