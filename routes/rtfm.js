var express = require('express');
var router = express.Router();
var Globals = require('../models/globals');
var Challenge = require('../models/challenge');
var User = require('../models/user');
var Question = require('../models/question');



/* GET home page. */
router.get('/rtfm', function(req, res) {  
    if(Globals.User && Globals.User.islogged()){  
        var challenge = Globals.CurrentChallenge;      
        res.render('rtfm',{'challenge':challenge});                        
    }
    else{
        res.write('<html><body>You are not autorized to view this page!</body></html>');
    }
});

router.post('/rtfm', function(req, res) {  
    if(Globals.User && Globals.User.islogged()){
        var challenge = Globals.CurrentChallenge;
      //Question.findOne({'question':'Kto si?'},function (err, q) {
        Question.find({'challengeid':challenge._id},function (err, q) {
        //Question.find({'challengeid':"59427e4b215bcf961abc6143"},function (err, q) {
        //Question.findById("59525fb8215bcf961abc6146",function (err, q) {
        //Question.find({'_id':"59525fb8215bcf961abc6146"},function (err, q) {
            if (err) {
                console.log('An error occurred') 
                return handleError(err); 
            }
            else{
                if(q){
                    console.log('question found'); 
                    q=shuffle(q);
                    Globals.CurrentQuestionary = q;
                    console.log('CurrentQuestionary set');
                    res.redirect('/question?num=0')
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

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

module.exports = router;