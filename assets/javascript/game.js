var songs = ["andromeda", "waves", "riot", "diabolic", "cobra"];

var word="";
var answerArray = [];

function chooseSong(){
  word = songs[Math.floor(Math.random() * songs.length)];
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  document.getElementById("song").innerHTML= answerArray.join(" ");
  document.getElementById("message").innerHTML= "Press Any Key to Get Started"
}
chooseSong();

document.onkeyup = function(event) {
  var guess = event.key;
  var win = 0;
  var i = 0;
  var guessesLeft = 12;
  

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

   for (var i = 0; i < word.length; i++) {
    if (word[i] !== guess) {
      guessesLeft--;
      document.getElementById("guesses").innerHTML= "Guesses Left: " + guessesLeft;
      }
    }

  // Reset after player wins

  if (remaining_letters == 0) {
    win++;
    word = songs[Math.floor(Math.random() * songs.length)];
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
      document.getElementById("wins").innerHTML= "Wins: " + win;
    }
  }

  document.getElementById("song").innerHTML= answerArray.join(" ");

  

}





