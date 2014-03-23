var userServices = require('../services/userServices'),
error = require('../utility/errors');


exports.findAll = function (req, res) {
  userServices.getAll(res);
};

exports.createUser = function (req, res) {
	var firstName = req.body.firstName, lastName = req.body.lastName,
	username = req.body.username, password = req.body.password,
	age = req.body.age, sex = req.body.sex, 
	location = req.body.location;
	if (username && lastName && firstName && password && age && sex && location){ 
	  userServices.createUser(firstName, lastName, username, password, age, sex,location, res);
	} else {
		error.invalidFields(res);
	}
};

exports.searchUsersByName = function (req, res){
	var query = req.param("query");
	if(query){
		userServices.searchUsersByName(query, res);
	} else {
		error.invalidQuery(res);
	}
};