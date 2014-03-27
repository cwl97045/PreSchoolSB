$(document).ready(function () {
  loginPage.init();
  $('#login').click(function () {
    var loginInfo = loginPage.getLoginInfo('[name="loguser"]', '[name="logpass"]'),
      loginUser = loginPage.ajaxCall('POST', '/login', loginInfo);
    loginUser.done(function (data) {
      console.log(data);
    });
  });
  $('#register').click(function () {
    loginPage.showHide('#registerForm', '#loginForm');
  });
  $('#back').click(function () {
    loginPage.showHide('#loginForm', '#registerForm');
  });
  $('#registerSubmit').click(function () {
    var newUser = user.newUser('[name="username"]', '[name="firstName"]','[name="lastName"]',
	'[name="age"]', '[name="password"]','[name="conPassword"]', '[name="gender"]:checked', '[name="location"]');
    console.log(newUser);

    var registerUser = loginPage.ajaxCall('POST', '/user', newUser);
    registerUser.done(function (data) {
      console.log(data);
    });
  });
});