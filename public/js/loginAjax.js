var loginPage = {
  ajaxCall : function (method, url, data) {
    var call = $.ajax({
      type: method,
      url : url,
      data : data,
      dataType : "json"
    });
    return call;
  },
  showHide : function (show, hide) {
    $(show).show();
    $(hide).hide();
  },
  init : function () {
    $('#registerForm').hide();
  },
  getLoginInfo : function (usernameId, passwordId) {
    return {username : $(usernameId).val(), password : $(passwordId).val()};
  }
};

var user = {
  newUser : function (username, firstName, lastName, age, password, conPassword, sex, location) {
    var user = {};
    user['username'] = $(username).val();
    user['firstName'] = $(firstName).val();
    user['lastName'] = $(lastName).val();
    user['age'] = $(age).val();
    user['password'] = $(password).val();
    user['conPassword'] = $(conPassword).val();
    user['sex'] = $(sex).val();
    user['location'] = $(location).val();
    return user;
  }
};