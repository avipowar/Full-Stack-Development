// let myArray = [5, "six", 2, 8.2]
// console.log(myArray)
// console.log(myArray[0])
// console.log(myArray[1])

// console.log(myArray[1])
// myArray[1] = 6;
// console.log(myArray[1])

// lengthOfArray = myArray.length;
// console.log( lengthOfArray)

// add the element
// myArray.push(true)
// console.log(myArray)
// // remove the element
// console.log(myArray.pop())
// console.log(myArray)


// create a html element using js

// create a html element h1
let h1Element = document.createElement('h1');
h1Element.textContent = "web Technology";
// console.log(h1Element)
// add to the body
// document.body.appendChild(h1Element);

// add h1 in div
let containerElement = document.getElementById("myContainer")
containerElement.appendChild(h1Element)

// add btn
let btnElement = document.createElement('button');
btnElement.textContent = "change heading";
containerElement.appendChild(btnElement);

// function declaration 
function showMessage() {
    console.log("function declaration")
}

showMessage()

// function declaration
let showMessage1 = function() {
    console.log("function declaration")
}

showMessage1()

btnElement.onclick = function() {
    // console.log("Click Event Triggered")
    h1Element.textContent = "4.0 Technology";
    // h1Element.style.color = "blue";
    // h1Element.style.fontSize = "404px";
    // h1Element.style.fontFamily = "Caveat";
    // h1Element.style.textDecorationLine = "underline";
    h1Element.classList.add("heading")
    console.log(h1Element)

};

document.getElementById("myContainer").appendChild(btnElement)

// btn2
let removeStyleBtnElement = document.createElement('button');
removeStyleBtnElement.textContent = "remove heading";
containerElement.appendChild(removeStyleBtnElement);


removeStyleBtnElement.onclick = function() {
    // console.log("Click Event Triggered")
    h1Element.textContent = "4.0 Technology";
    // h1Element.style.color = "blue";
    // h1Element.style.fontSize = "404px";
    // h1Element.style.fontFamily = "Caveat";
    // h1Element.style.textDecorationLine = "underline";
    h1Element.classList.remove("heading")
    // console.log(h1Element)

};