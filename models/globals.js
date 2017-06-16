var Globals = {
    'logged': false,
    'username': ''
}

var User = require('../models/user');
var CurrentChallenge = require('../models/challenge');

exports.User = User;
exports.CurrentChallenge = CurrentChallenge;

module.exports = Globals;