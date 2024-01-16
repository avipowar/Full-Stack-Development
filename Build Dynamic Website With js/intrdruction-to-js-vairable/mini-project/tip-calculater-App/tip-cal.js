let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");
let errorMessageDisplay = "Please Enter a Valid Input.";


function calculateTip() {
    let billAmountInputValue = billAmount.value;
    let percentageTipInputValue = percentageTip.value;

    if(billAmountInputValue === "") {
        errorMessage.textContent = errorMessageDisplay;
    }
    else if (percentageTipInputValue === "") {
        errorMessage.textContent = errorMessageDisplay;
    }
    else {
        errorMessage.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;

        tipAmount.value = calculatedTip;
        totalAmount.value = calculatedTotal;
    }

}