$(document).ready(function (){
	//init function 
	$('#registerForm').hide();
	$('#login').click(function (){
		var loginInfo = {username : $('[name="loguser"]').val(), password : $('[name="logpass"]').val()};
		var loginUser = ajaxCall('POST', '/login', loginInfo);
		loginUser.done(function(data){
			console.log(data);
		});
	});
	//Either switch to a SPA or change this to one function between both buttons
	$('#register').click(function (){
		$('#loginForm').hide();
		$('#registerForm').show();
	});
	$('#back').click(function (){
		$('#loginForm').show();
		$('#registerForm').hide();
	});

	$('#registerSubmit').click(function (){
		//define user else where and make constructor
		var user = { 
			username : $('[name="username"]').val(),
			firstName : $('[name="firstName"]').val(),
			lastName : $('[name="lastName"]').val(),
			password : $('[name="password"]').val(),
			//conPassword : $('[name="conPassword"]').val(),
			sex : $('[name="gender"]:checked').val(),
			location : $('[name="location"]').val(),
			age : $('[name="age"]').val()
		};
		/*$.ajax({
			type:"POST",
			url:"/user",
			data : user,
			dataType:"json"
		}).done(function ( data ) {
			console.log(data);
		});*/
		var registerUser = ajaxCall('POST', '/user', user);
		registerUser.done(function( data ){
			console.log(data);
		});
	
	});
});