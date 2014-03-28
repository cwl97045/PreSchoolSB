//Will need to add database information
//
var userModel = require('../models/user'),
userDAO = require('../DAO/userDAO'),
error = require('../utility/errors'),
hash = require('sha1');

/*Gets all users from database*/

exports.getAll = function (res) {
	userDAO.getAll(res);
};

/*Creates user */
exports.createUser = function (firstName, lastName ,username, password, conPassword , age, sex, location, res) {
  var salt = new Date();
  var saltedPassword = hash(password + salt.getMilliseconds());
  var newUser = new userModel.user(username, firstName, lastName, saltedPassword, age, sex, location, salt.getMilliseconds());
  if(newUser && (password === conPassword)){
  	userDAO.createUser(newUser, res);
  } else {
  	error.invalidFields(res);
  }
};

exports.searchUsersByName = function (query, res){
	userDAO.searchUsersByName(query, res);
};
