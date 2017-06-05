var express = require('express');
var router = express.Router();

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


module.exports = router;