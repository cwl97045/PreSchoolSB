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
	connection.query('SELECT * FROM users WHERE firstname LIKE ?', query, function (err, results){
		if(err){
			var error = JSON.parse(JSON.stringify(err));
			res.send({status : '300', Message : error['code']});
		} else {
			var values = JSON.parse(JSON.stringify(results));
			res.send({status : '200', Results : values});
		}
	});
};
