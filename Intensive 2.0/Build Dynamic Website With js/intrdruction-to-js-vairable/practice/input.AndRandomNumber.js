let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText")

function signIn() {
    let inputValue = inputElement.value;
    let verifyText = "Hi " + inputValue + ", Verifying Your Account...";
    signInTextElement.textContent = verifyText;
}


// RANDOM NUMBER
let randomNumber = Math.random() * 100
console.log(randomNumber)
// math.ceil is converted (decimal into integer)
console.log(Math.ceil(randomNumber)) //round of next larger integer