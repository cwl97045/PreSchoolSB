var hash = require('password-hash'),
authService = require('../services/authService'),
error = require('../utility/errors');

exports.login = function (req, res){
	var username = req.body.username, password = req.body.password;
	if(username && password){
		authService.authenticate(username, password, res);
	} else {
		error.invalidFields(res);
	}

};