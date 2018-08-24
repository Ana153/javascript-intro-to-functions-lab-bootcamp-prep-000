function shout(word){
  return word.toUpperCase();
}

function whisper(word){
  return word.toLowerCase();
}

function logShout(word){
  console.log(word.toUpperCase());
}

function logWhisper(word){
  console.log(word.toLowerCase());
}




function sayHiToGrandma(string){
  var upper = string.toUpperCase();
  var lower = string.toLowerCase();
  if (string !== upper){
    return ("I can\'t hear you!")
  } else if (string !== lower) {
    return ("YES INDEED!")
  } else {
    return ("I love you, too.")
  }
}

sayHiToGrandma(hello);
sayHiToGrandma(HELLO);
sayHiToGrandma("I love you, Grandma.");