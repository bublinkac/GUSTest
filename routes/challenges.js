var express = require('express');
var router = express.Router();
var Globals = require('../models/globals');
var Challenge = require('../models/challenge');
var User = require('../models/user');




/* GET home page. */
router.get('/challenge', function(req, res) {   
    var logged = Globals.User.islogged(); 
    if(logged==true){
        Challenge.find(function (err, challenge) {  
            if (err) {
                // Note that this error doesn't mean nothing was found,
                // it means the database had an error while searching, hence the 500 status
                res.status(500).send(err)
            } else {
                // send the list of all people
                //res.send(challenge);
                res.render('challenge',{challenges:challenge});
            }
        });        
    }
    else{
        res.write('<html><body>You are not autorized to view this page!</body></html>');
    }
});

module.exports = router;