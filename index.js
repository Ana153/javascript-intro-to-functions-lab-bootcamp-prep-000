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





function sayHiToGrandma(word){
  var upper = word.toUpperCase;
  var lower = word.toLowerCase;
  if (word === lower){
    return ("I can\'t hear you!")
  } else if (word === upper) {
    return ("YES INDEED")
  } else {
    return ("I love you, too.")
  }
}

sayHiToGrandma(hello);
sayHiToGrandma(HELLO);
sayHiToGrandma("I love you, Grandma.");