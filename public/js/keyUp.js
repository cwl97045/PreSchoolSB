var loginKeyUpModule = function (validateModule, username, password) {
  function loginInit(validateModule, username, logpassword) {
    var args = arguments, i;
    for (i = 0; i < args.length; i++) {
      $(args[i]).keyup(function () {
        if (validateModule.basicValidInput($(this).val())) {
          $(this).data('valid', true);
          $(this).removeClass('fieldError');
        } else {
          $(this).data('valid', false);
          $(this).addClass('fieldError');
        }
      });
    }
  }
  function init() {
    loginInit(validateModule, username, password);
  }

  return {
    init : init
  };
};

var  registerKeyUpModule = function (validateModule, username, firstName, lastName, age, password, conPassword, location) {
  function basicFieldsInit(validateModule,username, firstName, lastName, location) {
    var args = arguments, i;
    for (i = 0; i < args.length; i++) {
      $(args[i]).keyup(function () {
        if (validateModule.basicValidInput($(this).val())){
          $(this).data('valid', true);
          $(this).removeClass('fieldError');
        } else {
          $(this).data('valid', false);
          $(this).addClass('fieldError');
        }
      });
    }
  }

  function passwordFieldsInit(validateModule ,password, conPassword) {
    //Fix this to work better
     $(password).change(function () {
      if(validateModule.twoInputsSame($(this).val(), $(conPassword).val())) {
        $(this).data('valid', true);
        $(this).removeClass('fieldError');
      } else {
        $(this).data('valid', false);
        $(this).addClass('fieldError');
      }
    });
    

    $(conPassword).change(function () {
      if(validateModule.twoInputsSame($(this).val(), $(password).val())) {
        $(this).data('valid', true);
        $(this).removeClass('fieldError');
      } else {
        $(this).data('valid', false);
        $(this).addClass('fieldError');
      }
    });
  }

  function init() {
    basicFieldsInit(validateModule, username, firstName, lastName, location);
    passwordFieldsInit(validateModule, password, conPassword);
  }

  return {
    init : init
  };
   
};

var initKeyUpModules = function ( registerKeyUpMod,loginKeyMod,validateModule, logusername, logpassword, username, firstName, lastName, age, password, conPassword, location ){
  function init() {
    var loginKeyUp = loginKeyMod(validateModule, logusername, logpassword);
    loginKeyUp.init();
    var regKeyUp = registerKeyUpMod(validateModule, username, firstName, lastName, age, password, conPassword, location);
    regKeyUp.init();
  }

  return {
    init : init
  };

};