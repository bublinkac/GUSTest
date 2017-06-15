var Globals = {
    'logged': false,
    'username': ''
}

var User = require('../models/user');

exports.User = User;

module.exports = Globals;