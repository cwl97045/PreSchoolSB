var hash = require('password-hash'),
authService = require('../services/authService');

exports.login = function (req, res){
	var username = req.body.username, password = req.body.password;
	if(username && password){
		authService.authenticate(username, password, res);
	} else {
		//Error
	}

};