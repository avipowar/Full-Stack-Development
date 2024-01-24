let firstNumbers = document.getElementById("firstNumber")
let secondNumber = document.getElementById("secondNumber")
let gameResult = document.getElementById("gameResult")
let userInput = document.getElementById("userInput")

let successMessage = "Congratulation..! You Got it right" 
let failureMessage = "Please Try again..!"


function restartGame() {
    let firstRandomNumber = Math.random() * 100
    let secondRandomNumber = Math.random() * 100

    firstNumbers.textContent = Math.ceil(firstRandomNumber);
    secondNumber.textContent = Math.ceil(secondRandomNumber);

    gameResult.textContent = "";
    userInput.value = "";
}

restartGame()


function checkResult() {
    let firstInteger = parseInt(firstNumbers.textContent);
    let secondInteger = parseInt(secondNumber.textContent);
    let userInputInteger = parseInt(userInput.value)

    let sumOfTwoNumbers = firstInteger + secondInteger

    if (userInputInteger === sumOfTwoNumbers) {
        gameResult.textContent = successMessage;
        gameResult.style.backgroundColor = "#028a0f"
    }
    else {
        gameResult.textContent = failureMessage;
        gameResult.style.backgroundColor = "#1e217c"
    }
}

