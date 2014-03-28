//var Qunit = require('../node_modules/qunitjs/qunit/qunit.js');
test("Element Grabs and evaluation", function(){
  var fixture = $('#qunit-fixture');
  var inputElements;
  for (var i = 0; i < 10; i++){
    inputElements += '<input id="input' + i + '""></input>';
  }
  fixture.append(inputElements);
  var elements = validate.getAllVisibleFields('input');
  equal(elements.length, 10, "That's how many");
  equal(false, validate.checkIfAllElementsAreFilled(elements), "Should not be filled");
  $('#input0').val('Phill');
  $('#input1').val('Phill');
  $('#input2').val('Phill');
  $('#input3').val('Phill');
  $('#input4').val('Phill');
  $('#input5').val('Phill');
  $('#input6').val('Phill');
  $('#input7').val('Phill');
  $('#input8').val('Phill');
  $('#input9').val('Phill');
  var newElements = validate.getAllVisibleFields('input');
  equal(true, validate.checkIfAllElementsAreFilled(newElements), "They should have values");

 
});
