const express = require('express')
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
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', routes.index);

MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000 aaha')
  })
})