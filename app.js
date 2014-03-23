var express = require('express'),
  users = require('./routes/users'),
  mysql = require('mysql'),
  auth = require('./routes/auth');

var app = express();
app.configure(function (){
	app.use(express.json());
});

app.get('/', users.findAll);
app.post('/login', auth.login);
app.post('/user', users.createUser);
app.get('/search/users/:query', users.searchUsersByName);

app.listen(3000);

console.log('Server\'s runing!');