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
  } else if (word.toUpperCase === word){
    return("YES INDEED!")
  }
}

sayHiToGrandma(bok);
sayHiToGrandma(BOK);
sayHiToGrandma("I love you, Grandma.");