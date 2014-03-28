$(document).ready(function () {
  loginPage.init();
  initKeyUpModules(registerKeyUpModule, loginKeyUpModule, validate ,'[name="loguser"]', '[name="logpass"]', '[name="username"]', '[name="firstName"]','[name="lastName"]',
	'[name="age"]', '[name="password"]','[name="conPassword"]', '[name="location"]' ).init();
  $('#login').on('click', function(){loginAction(loginPage, validate); });
  $('#register').on('click',function () {loginPage.showHide('#registerForm', '#loginForm'); });
  $('#back').on('click', function () {loginPage.showHide('#loginForm', '#registerForm'); });
  $('#registerSubmit').on('click', function () { registerAction(loginPage, validate); });
});