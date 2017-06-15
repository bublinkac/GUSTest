var express = require('express')
var mongoose = require('mongoose');
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var routes = require('./routes')
//, user = require('./routes/user')
, http = require('http')
, path = require('path');

var db

//app.set('view engine', 'ejs')
app.set('view engine', 'jade')
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

//app.use(express.static(path.join(__dirname, 'public')));
var urlencodedParser =app.use(bodyParser.urlencoded({extended: true}))

// app.post('/login', function(req, res) {
//   var usrname = req.body.username;
// 	//var pass = req.body.password;
// 	console.log('app' + req.body.user);
//  });

/// catch 404 and forwarding to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/


app.use('/', routes); 

//app.get('/', routes);
//app.get('/aaa', routes);
//app.post('/login',routes.index);

mongoose.connect('mongodb://localhost:27017/test', (err, database) => {
	  if (err) return console.log(err)
	  db = database
	  app.listen(3000, () => {
	    console.log('listening on 3000 mongoose')
	  })
	});

/*MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000 aah')
  })
})*/

// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/

module.exports = app;
module.exports = express;