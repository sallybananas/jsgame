//Number choices available
var computerChoices = ['0','1','2','3','4','5','6','7','8','9'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 3;
var guessesLeft = 3;
var guessedNumbers = [];
var numberToGuess = null;



//Lets the computer select a random number from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 3 guesses
// guesses = guesses || 3
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateNumberToGuess = function() {
  this.numberToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 3;
  guessesLeft = 3;
  guessedNumbers = [];

  updateNumberToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateNumberToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = Number(event.keyCode);
  // .fromCharCode(event.keyCode);
  // .toLowerCase();

  guessedNumbers.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == numberToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You are impressive mortal. Perhaps you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic mere mortal. Try again?");
            // Then we'll call the reset. 
            reset();
        }
};


