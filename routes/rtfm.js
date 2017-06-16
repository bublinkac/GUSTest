var express = require('express');
var router = express.Router();
var Globals = require('../models/globals');
var Challenge = require('../models/challenge');
var User = require('../models/user');
var Question = require('../models/question');

/* GET home page. */
router.get('/rtfm', function(req, res) {  
    if(Globals.User && Globals.User.islogged()){
        //var challenge = req.query.challenge;
        var challenge = Globals.CurrentChallenge;
        res.render('rtfm',{'challenge':challenge});
        Question.findOne({'question':'as'},function (err, u) {
            if (err) {
                console.log('bla') 
                return handleError(err);
            }
            else{
                
            }
        });                
    }
    else{
        res.write('<html><body>You are not autorized to view this page!</body></html>');
    }
});

module.exports = router;