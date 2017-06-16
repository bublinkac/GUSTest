var express = require('express');
var router = express.Router();
var Globals = require('../models/globals');

router.get('/usercreate_test', function(req, res) {
	var User = require('../models/user');

	// create a new user called chris
	var chris = new User({
	  username: 'mike1',
	  password: 'password' 
	});
	console.log('tu' + chris);
	// call the built-in save method to save to the database
	chris.save(function(err) {
	  if (err) throw err;

	  console.log('User saved successfully!');
	});
	
    res.send('saved');
});

router.get('/login', function(req, res) {
	res.render('login', { title: 'GuS' , labelvisible: true});
});

router.post('/login', function(req, res) {
	var usrname = req.body.user;
	var pass = req.body.password;

	var User = require('../models/user');
	var u = new User({
	  username: usrname,
	  password: pass 
	});
	u.login(function(user){
		if(user.islogged()){
			console.log('logged');
			//Globals.logged = true;
			Globals.username = usrname;
			Globals.User = user;
			res.redirect("/challenge")
		}
		else{
			console.log(' NOT logged');
			res.render('login', { title: 'GuS' , labelvisible: false});
		}
	})
		
});


module.exports = router;