
var numberOfGuessesAllowed = 3;
var currentGuess = 1;
var mainAnswer;
	

function GuessFruit(answer) {
	this.answer = answer;
	this.actualGame = function() {
		do {
			this.guess = console.log("Can you guess what my favorite fruit is? (small hint: the answer will be in all lowercase letters!)");
			if (this.guess == this.answer) {
				alert("You are correct! Doesn't pineapple sound good right now?");
			} else {
				alert("This delicious fruit appears yellow (unless it goes bad). Try again!");
				currentGuess++;
			}
		} while (this.guess != this.answer && currentGuess <= numberOfGuessesAllowed)

		if (currentGuess > numberOfGuessesAllowed) {
			alert("Sorry! You are out of guesses.\n\nThe correct answer was pineapple!");
		}
	}	 
}


mainAnswer = new GuessFruit("pineapple");

$("#inputSubmit").on("click", mainAnswer.actualGame);