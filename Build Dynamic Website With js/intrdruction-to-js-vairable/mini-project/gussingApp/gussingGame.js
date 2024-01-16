let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let ten = document.getElementById("ten")
let attempts = 0; // Counter for attempts
let maxAttempts = 10; // Maximum allowed attempts
let randomNumber = Math.ceil(Math.random() * 100);
let max = maxAttempts
console.log(randomNumber)
function checkGuess() {
    attempts++;
    ten.textContent = max;
    max--;
    if (attempts > maxAttempts) {
        gameResult.textContent = "You've attempted 5 times. The correct answer was " + randomNumber + ". Reloading...";
        gameResult.style.backgroundColor = "red";
        setTimeout(() => {
            location.reload(); // Reload the page after a delay
        }, 10000); // 2000 milliseconds (2 seconds) delay before reloading
    } 
    else {
        let guessedNumber = parseInt(userInput.value);

        if (guessedNumber > randomNumber) {
            gameResult.textContent = "Too High! Try Again. ";
            gameResult.style.backgroundColor = "#1e217c";
        } else if (guessedNumber < randomNumber) {
            gameResult.textContent = "Too Low! Try Again. ";
            gameResult.style.backgroundColor = "#1e217c";
        } else if (guessedNumber === randomNumber) {
            gameResult.textContent = "Congratulations! You Got It Right! Reloading...";
            gameResult.style.backgroundColor = "green";
            setTimeout(() => {
                location.reload(); // Reload the page after a delay
            }, 10000); // 2000 milliseconds (2 seconds) delay before reloading
        } else {
            gameResult.textContent = "Provide Valid user input";
            gameResult.style.backgroundColor = "red";
        }
    }
}
