
var validateModule = (function () {
  var passwordReg = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#^!]).{5,})');
  var emailReg = new RegExp('^(.){1,}@(.){1,}\\.(.){1,}$');
  function twoInputsSame(inputOne, inputTwo) {
    var match = (inputOne === inputTwo) ? true : false;
    return match;
  }
  function checkPassword(input) {
    var valid = (passwordReg.test(input)) ? true : false;
    return valid;
  }
  function checkEmail(input) {
    var valid = (emailReg.test(input)) ? true : false;
    return valid;
  }

  return {
    twoInputsSame : twoInputsSame,
    checkPassword : checkPassword,
    checkEmail : checkEmail
  };

})();

//For testing
exports.validateModule = validateModule;