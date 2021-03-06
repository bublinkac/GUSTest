// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var logged = false;

//create a schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  contentadmin: Boolean,
  created_at: Date,
  updated_at: Date
});

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 
  return this.name;
};

userSchema.methods.islogged = function() {
    return logged;
};

userSchema.methods.login = function(callback) {
  // add some stuff to the users name
  console.log('this.username ' +this.username);
  console.log('this.password ' +this.password);
  var pass = this.password;
  User.findOne({ 'username': this.username }, function (err, u) {
    if (err) {
      console.log('User %s not found' + this.username) 
      return handleError(err);
    }
    else{
      console.log('password je: ' + u.password);
      var pas= u.password;
      console.log('pass: ' + pas);
      if(pas==pass) {
        logged = true;
        return callback(u)
      }
      else{
        logged = false;
        return callback(u)
      } 
    }     
  })    
};

//on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

exports.logged = logged;
// make this available to our users in our Node applications
module.exports = User;