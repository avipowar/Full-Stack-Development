let counterElement = document.getElementById("counterValue")
// console.log(counterElement)
function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    // console.log(previousCounterValue);
    // console.log(typeof(previousCounterValue));
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    // console.log(updatedCounterValue);
    // console.log(typeof(updatedCounterValue));
    counterElement.textContent = updatedCounterValue;

    // for color
    if (updatedCounterValue > 0){
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    }
    else{
       counterElement.style.color =  "black"
    }
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
     // for color
     if (updatedCounterValue > 0){
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    }
    else{
       counterElement.style.color =  "black"
    }
}

function onReset() {
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
     // for color
    counterElement.style.color =  "black"
    
}

function showFeedbackPrompt() {
    // Use the browser's built-in prompt to get user feedback
    const userFeedback = prompt("We'd love to hear your feedback! How can we improve the Havoc Counter App?");

    // Check if the user provided feedback
    if (userFeedback !== null && userFeedback.trim() !== "") {
        // Log the feedback to the console (you may want to send it to a server in a production environment)
        console.log("User Feedback:", userFeedback);

        // You can also display a thank you message or any other appropriate response to the user
        alert("Thank you for your feedback! We appreciate your input.");
    } else {
        // Handle the case where the user cancels or provides empty feedback
        alert("Feedback not submitted. We value your thoughts, feel free to share anytime!");
    }
}
