
var validate = (function () {
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
  function basicValidInput(input) {
    var valid = input ? true : false;
    return valid;
  }

  function getAllVisibleFields(type){
    return $(type + ':visible');
  }

  function checkIfAllElementsAreFilled(array){
    var allFilled = true;
    for(var i = 0; i < array.length; i++){
      if(!$(array[i]).val()){
        allFilled = false;
        break;
      }
    }
    return allFilled;
  }

  return {
    twoInputsSame : twoInputsSame,
    checkPassword : checkPassword,
    checkEmail : checkEmail,
    basicValidInput : basicValidInput,
    getAllVisibleFields : getAllVisibleFields,
    checkIfAllElementsAreFilled : checkIfAllElementsAreFilled
  };

}());

//For testing
exports.validate= validate;

