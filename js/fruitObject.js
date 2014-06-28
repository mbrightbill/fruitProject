$(document).ready(function() {
	var numberOfGuessesAllowed = 3;
	var currentGuess = 1;
	var mainAnswer;
	var m = document.getElementById('message');
		

	function GuessFruit(answer) {
		
		if (answer == "pineapple") {
			m.innerHTML="Wow. Nice.";
		} else {
			var guessesLeft = numberOfGuessesAllowed - currentGuess;
			var c = document.getElementById('guessesLeft');
			c.innerHTML=guessesLeft;
			currentGuess++;
		}
	}

	$('#target').submit(function(event) {
		event.preventDefault();
		if(currentGuess < numberOfGuessesAllowed) {
			var guess = $('#guess').val();
			GuessFruit(guess);
		} else {
			m.innerHTML="<strong>Game Over.</strong>";
		}
	});
});
		


