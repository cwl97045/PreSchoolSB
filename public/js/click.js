/*var loginClickModule = function (pageModel, validateModule, buttonId) {
   
    function init(pageModel, validateModule, buttonId){
    $(buttonId).click(function () {})
        var elementArray = pageModel.getAllVisibleFields('input');
    }
	return {
		init : init
	};
};


var registerClickModule = function (pageModel, validateModule, buttonId){


  return {
    init : init
  };
};*/















var initClickListeners = function (loginClickModule, registerClickModule, loginButtonId, registerButtonId, loginPageModel, registerPageModel, validateModule) {
  var loginModule = loginClickModule(loginPageModel, validateModule, loginButtonId);
  loginModule.init();
  var registerModule = registerClickModule(registerPageModel, validateModule, registerButtonId );
  registerModule.init();
};