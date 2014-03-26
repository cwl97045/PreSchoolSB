var express = require('express'),
  users = require('./routes/users'),
  mysql = require('mysql'),
  auth = require('./routes/auth');

var app = express();

/*var allowCrossDomain = function (req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
};*/	

app.configure(function (){
	app.use(express.static(__dirname + '/public'));
	app.use(express.urlencoded());
	app.use(express.json());
	//app.use(allowCrossDomain);
});

/* initial get should return login/register pages*/	

app.get('/', function (req, res){
	res.sendfile('./public/login.html');
});
app.post('/login', auth.login);

/* After login, user should be sent to app */



app.post('/user', users.createUser);
app.get('/search/users/:query', users.searchUsersByName);

app.listen(3000);

console.log('Server\'s runing!');