$(document).ready(function () {
  loginPage.init();
  initKeyUpModules(registerKeyUpModule, loginKeyUpModule, validate ,'[name="loguser"]', '[name="logpass"]', '[name="username"]', '[name="firstName"]','[name="lastName"]',
	'[name="age"]', '[name="password"]','[name="conPassword"]', '[name="location"]' ).init();
  $('#login').click(function () {
    var elementArray = validate.getAllVisibleFields('input');
    if (validate.checkIfAllElementsAreFilled(elementArray)){
      var loginInfo = loginPage.getLoginInfo('[name="loguser"]', '[name="logpass"]'),
      loginUser = loginPage.ajaxCall('POST', '/login', loginInfo);
        loginUser.done(function (data) {
          console.log(data);
      });
    } else {
      //Display an error Message
    }
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

    var registerUser = loginPage.ajaxCall('POST', '/user', newUser);
    registerUser.done(function (data) {
      console.log(data);
    });
  });
});