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
  return newString;
}


$(document).ready(function() {

  $('form#pingPong').submit(function(event) {

    var input = parseInt($('#userInput').val());
    var pingString = pingPong(input);

    $('#result').text(pingString);

    event.preventDefault();
  });
});
