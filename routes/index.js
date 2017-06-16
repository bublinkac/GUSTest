/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();
var users = require('./users');
var challenges = require('./challenges');
var Globals = require('../models/globals');
var rtfm = require('./rtfm');


/* GET home page. */
router.get('/', function(req, res) {
    res.render('login', { title: 'GuS' , labelvisible: true});
});


router.get('/login', function(req, res) {
	res.render('login', { title: 'GuS' , labelvisible: true});
});

// router.post('/login', function(req, res) {
//    res.redirect('/index')
// });

router.post('/login',users);

router.get('/usercreate_test', users);

router.get('/index', function(req, res) {
  res.render('index', { title: 'Welcome to GuS'});
});

router.get('/logout', function(req, res) {
  Globals.logged=false;
  res.render('login', { title: 'GuS' , labelvisible: true});
});

router.get('/challenge', challenges);
router.post('/challenge', challenges);

router.get('/rtfm', rtfm);

exports.index = function(req, res){
  res.render('login', { title: 'GuS' });
	//res.send('hello world')
};

module.exports = router;