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
        //Question.findOne({'question':'Kto si?'},function (err, q) {
        Question.find({'challengeid':challenge._id},function (err, q) {
        //Question.find({'challengeid':"59427e4b215bcf961abc6143"},function (err, q) {
        //Question.findById("59525fb8215bcf961abc6146",function (err, q) {
        //Question.find({'_id':"59525fb8215bcf961abc6146"},function (err, q) {
            if (err) {
                console.log('bla') 
                return handleError(err); 
            }
            else{
                if(q){
                    console.log('question found'); 
                }
                else{
                    console.log('question not found');
                }
                
            }
        });                
    }
    else{
        res.write('<html><body>You are not autorized to view this page!</body></html>');
    }
});

module.exports = router;