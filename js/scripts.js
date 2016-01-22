var pingPong = function(input){

  var count = input;
  var newString = [];

  for (var i = 1; i <= count; i++) {
    if (i % 15 === 0) {
      newString.push("ping-pong")
    }else if (i % 3 === 0) {
      newString.push("ping")
    }else if (i % 5 === 0){
      newString.push("pong")
    }else{
      newString.push(i)
    }
  }
  var spaces = [];
  for (var j = 0; j < newString.length; j++) {
    spaces.push(" " + newString[j]);
  }

return spaces;

}
$(document).ready(function() {

  $('form#pingPong').submit(function(event) {
    $("span").html("");
    var input = parseInt($('#userInput').val());
    var pingString = pingPong(input);
debugger;
    for (var j = 1; j = pingString.length; j++) {
      var result = pingString.splice(0,1);
      result = result + '</br>'
      $('#result').append(result);
    }

    event.preventDefault();
  });
});


// var pingHtml = [];
// for (var j = 0; j <= newString.length; j++) {
//   pingHtml.push("<li>" + newString[j] + "</li>");
// }
