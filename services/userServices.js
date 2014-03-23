//Will need to add database information
//
var userModel = require('../models/user'),
userDAO = require('../DAO/userDAO'),
error = require('../utility/errors');

/*Gets all users from database*/

exports.getAll = function (res) {
	userDAO.getAll(res);
};

/*Creates user */
exports.createUser = function (firstName, lastName ,username, password, age, sex, location, res) {
  var newUser = new userModel.user(username, firstName, lastName, password, age, sex, location);
  if(newUser){
  	userDAO.createUser(newUser, res);
  } else {
  	error.invalidFields(res);
  }
};

exports.searchUsersByName = function (query, res){
	userDAO.searchUsersByName(query, res);
};
