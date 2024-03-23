// for buttons
let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton")

// for signal
let stopLight = document.getElementById("stopLight")
let readyLight = document.getElementById("readyLight")
let goLight = document.getElementById("goLight")

function red() {
    stopButton.style.backgroundColor = "red";
    stopLight.style.backgroundColor = "red";

    readyButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goButton.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
}

function yellow() {
    stopButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readyButton.style.backgroundColor = "yellow";   
    readyLight.style.backgroundColor = "yellow";

    goButton.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
}

function green() {
    stopButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readyButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goButton.style.backgroundColor = "green";
    goLight.style.backgroundColor = "green";
}