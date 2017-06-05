/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();
var users = require('./users')


/* GET home page. */
router.get('/', function(req, res) {
    res.render('login', { title: 'Express' });
});

router.get('/usercreate_test', users);

exports.index = function(req, res){
  res.render('login', { title: 'GuS' });
	//res.send('hello world')
};

module.exports = router;