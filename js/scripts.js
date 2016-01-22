var pingPong = function(num){

  var count = num;
  var newString = [];
  // var ping = "ping";
  // var pong = "pong";

  for (var i = 1; i <= num; i++) {
// debugger;
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
console.log(newString);


  return newString;
}
