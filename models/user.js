exports.user = function (username, firstName, lastName, password, age, sex, location, salt){
	this.username = username;
	this.firstName = firstName;
	this.lastName = lastName;
	this.password = password;
	this.age = age;
	this.sex = sex;
	this.location = location;
	this.salt = salt;
};