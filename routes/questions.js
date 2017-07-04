var express = require('express');
var router = express.Router();
var Globals = require('../models/globals');
var Challenge = require('../models/challenge');
var User = require('../models/user');

router.get('/question', function(req, res) {  
    if(Globals.User && Globals.User.islogged()){
        var i = req.query.num;
        //var i = 0;
        var question = Globals.CurrentQuestionary[i];
        res.render('question',{'question':question, 'num':i}); 
    }
    else{
        res.write('<html><body>You are not autorized to view this page!</body></html>');
    }
});

router.post('/question', function(req, res) {
    var i = req.body.num;
    i = i++;
    res.redirect('/question?num=' + i);
});

module.exports = router;