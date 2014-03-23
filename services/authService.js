var guid = require('guid'),
userDAO = require('../DAO/userDAO'),
hash = require('sha1');

exports.authenticate = function (username, password, res) {
	userDAO.getUserByUserName(username, res, function (user){
		var testPass = hash(password + user.salt); 
		if(testPass === user.password){
			var newAuthToken = guid.create();
			userDAO.setAuth(user , newAuthToken, res);
		} else {
			//invalid Password error
			console.log('nah');
		}
	});
};