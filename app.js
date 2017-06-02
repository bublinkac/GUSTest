const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db

app.use(bodyParser.urlencoded({extended: true}))
//app.set('view engine', 'ejs')
app.set('view engine', 'jade')

app.get('/', function(req, res) {
  //res.sendFile(__dirname + '/index.html')
  db.collection('quotes').find().toArray(function(err, results) {
  //console.log(results)
  res.render('index.ejs', {quotes: results})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})


MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})