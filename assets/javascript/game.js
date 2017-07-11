var songs = ["andromeda", "waves", "riot", "diabolic", "cobra"];
var win = 0;
var word="";
var i = 0;
var guessesLeft = 12;
var answerArray = [];
var badGuessList = [];

function chooseSong() {
  word = songs[Math.floor(Math.random() * songs.length)];
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  document.getElementById("song").innerHTML= answerArray.join(" ");
  document.getElementById("message").innerHTML= "Press Any Key to Get Started"
  document.getElementById("guesses").innerHTML= "Guesses Left: " + guessesLeft;
}
chooseSong();

document.onkeyup = function(event) {
  var guess = event.key;

  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
    }
  }

  var remaining_letters = 0;
  for (i = 0; i < word.length; i++) {
    if (answerArray[i] === "_") {
      remaining_letters += 1;
    }
  }

  // Guesses left
   
  if (!word.includes(guess)) {
    if (!badGuessList.includes(guess)) {
      guessesLeft--;
      badGuessList.push(guess);
      document.getElementById("guesses").innerHTML= "Guesses Left: " + guessesLeft;
      document.getElementById("letters").innerHTML= badGuessList.join(" ");
    } 

  }

  // Reset after player wins

  if (remaining_letters == 0) {
    win++;
    guessesLeft = 12;
    word = songs[Math.floor(Math.random() * songs.length)];
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
      document.getElementById("wins").innerHTML= "Wins: " + win;
      document.getElementById("guesses").innerHTML= "Guesses Left: " + guessesLeft;
      document.getElementById("letters").innerHTML= badGuessList = [];
    }
  }

  // Reset after running out of guesses

  if (guessesLeft == 0) {
    guessesLeft = 12;
    word = songs[Math.floor(Math.random() * songs.length)];
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
      document.getElementById("wins").innerHTML= "Wins: " + win;
      document.getElementById("guesses").innerHTML= "Guesses Left: " + guessesLeft;
      document.getElementById("letters").innerHTML= badGuessList = [];
    }
  } 

  document.getElementById("song").innerHTML= answerArray.join(" ");

}





