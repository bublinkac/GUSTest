var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var questionSchema = new Schema({
    challengeid: { type: Schema.Types.ObjectId, required: true },
    //challengeid: { type: String, required: true },
    question: { type: String, required: true },
    answers:[
        {
            answer: {type: String, required: true},
            iscorrect: {type: Boolean, required: true},
        }
    ] ,
  created_at: Date,
  updated_at: Date
});

//on every save, add the date
questionSchema.pre('save', function(next) {
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
var Question = mongoose.model('Question', questionSchema);

// make this available to our users in our Node applications
module.exports = Question;