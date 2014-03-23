var express = require('express'),
  users = require('./routes/users'),
  mysql = require('mysql');

var app = express();
app.configure(function (){
	app.use(express.json());
});

app.get('/', users.findAll);
app.post('/user', users.createUser);

app.listen(3000);

console.log('Server\'s runing!');