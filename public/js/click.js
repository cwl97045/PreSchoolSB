
var loginAction = function (pageModel, validateModule) {
  if (validateModule.areAllFieldsFilled('input')) {
    var loginInfo = pageModel.getLoginInfo('[name="loguser"]', '[name="logpass"]');
    var loginUser = pageModel.ajaxCall('POST', '/login', loginInfo);
    loginUser.done(function (data) {
      if(data.status === "200"){
        console.log(data);
      } else {
        console.log(error);
      }
    });
  } else {
  //Do Shit
  }
};

var registerAction = function (pageModel, validateModule){
  if (validateModule.areAllFieldsFilled('input') && validateModule.twoInputsSame($('[name="password"]').val(),$('[name="conPassword"]').val()) && validateModule.checkPassword($('[name="password"]').val())) {
    var newUser = user.newUser('[name="username"]', '[name="firstName"]','[name="lastName"]',
  '[name="age"]', '[name="password"]','[name="conPassword"]', '[name="gender"]:checked', '[name="location"]');

    var registerUser = loginPage.ajaxCall('POST', '/user', newUser);
    registerUser.done(function (data) {
      console.log(data);
    });
  } else {
    console.log('Ahh');
  }
};