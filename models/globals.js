var Globals = {
    'logged': false,
    'username': ''
}

var User = require('../models/user');
var CurrentChallenge = require('../models/challenge');
var Question = require('../models/question');

var CurrentQuestionary = [];

exports.User = User;
exports.CurrentChallenge = CurrentChallenge;
exports.CurrentQuestionary = CurrentQuestionary;

module.exports = Globals;