var guid = require('guid'),
userDAO = require('../DAO/userDAO'),
hash = require('sha1'),
error = require('../utility/errors');

exports.authenticate = function (username, password, res) {
	userDAO.getUserByUserName(username, res, function (err , user){
      if (!user){
        error.authFail(res);
      } else {
		var testPass = hash(password + user.salt); 
		if (testPass === user.password){
			var newAuthToken = guid.create();
			userDAO.setAuth(user , newAuthToken, res);
		} else {
			error.authFail(res);
		}
	}
	});
};