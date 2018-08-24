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
  if(word.toLowerCase === word){
    console.log("I can\'t hear you!")
  } else if (word === "I love you, Grandma."){
    console.log("I love you, too.")
  } else {
    console.log("YES INDEED!")
  }
}