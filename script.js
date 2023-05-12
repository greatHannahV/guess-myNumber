'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMassage = function(message) {
    document.querySelector(".message").textContent = message
}

// reset
document.querySelector('.again').addEventListener('click', function() {

        score = 20;
        secretNum = Math.trunc(Math.random() * 20) + 1;
        displayMassage("Start guessing...")
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value = " "
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = "15rem"
    })
    // Get the input field
var input = document.querySelector(".guess");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector('.check').click();
    }
});
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
        // no input
    if (!guess) {
        displayMassage("No number!🙄")

        // wins
    } else if (guess === secretNum) {
        displayMassage("Correct🧨🎉")
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = "30rem"
        document.querySelector('.number').textContent = secretNum

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore

        }


        // when wrong
    } else if (guess !== secretNum) {
        if (score > 1) {
            displayMassage(guess > secretNum ? "Too high 🤓" : "Too low 😬");
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMassage("You lost the game 😭");
            document.querySelector('.score').textContent = 0;

        }

    }


});