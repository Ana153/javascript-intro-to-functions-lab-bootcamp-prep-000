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
  if (word.toLowerCase === word){
    return ("I can\'t hear you!")
  } else {
    return ("I love you, too.")
  }
}

sayHiToGrandma(hello);
sayHiToGrandma(HELLO);
sayHiToGrandma("I love you, Grandma.");