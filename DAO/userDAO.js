var mysql = require('mysql'),
error = require('../utility/errors');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'PreSchoolSB'
});

connection.connect(function(err){
	if(err) throw err;
});

exports.createUser = function(user, res){
	if(user){
		var data = JSON.parse(JSON.stringify(user));
		connection.query('INSERT INTO users SET ?', data, function(err, result){
			if(err){
				var error = JSON.parse(JSON.stringify(err));
				res.send({status : "300", Message : error['code']});
			} else {
				res.send({status:"200", Message : "User created"});
			}
		});
	} else {
		error.InvalidFields(res);
	}
};

exports.getAll = function (res) {
	connection.query('SELECT * FROM users', function (err, result){
		if(err) throw err;
		res.send({ users : JSON.parse(JSON.stringify(result))});
	});
};


exports.searchUsersByName = function (query, res){
	var search = '%' + query + '%';
	connection.query('SELECT * FROM users WHERE firstname LIKE ?', search, function (err, results){
		if(err){
			var error = JSON.parse(JSON.stringify(err));
			res.send({status : '300', Message : error['code']});
		} else {
			var values = JSON.parse(JSON.stringify(results));
			res.send({status : '200', Results : values});
		}
	});
};

exports.getUserByUserName = function (username, res, callback){
	var user;
	connection.query('SELECT * FROM users WHERE username= ?', username, function (err, result){
		if(err){		
			var error = JSON.parse(JSON.stringify(err));
			res.send({status : '300', Message : error['code']});
		} else {
			user = result[0];
			callback(user);
		}
	});
};

exports.setAuth = function (user,authToken, res) {
	connection.query('UPDATE users SET authtoken =' + mysql.escape(authToken.toString()) +  'WHERE username =' + mysql.escape(user.username) , function(err, result){
		if(err){
			var error = JSON.parse(JSON.stringify(err));
			res.send({status : '300', Message : error['code']});
		} else {
			res.send({status : '200', auth : authToken, user :{ username : user.username, firstname: user.firstname,
				lastname : user.lastname, age : user.age, sex : user.sex, location : user.location
			}});
		}
	});
};
