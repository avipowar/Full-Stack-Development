let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];
let bgContainer = document.getElementById("bgContainer")
let button = document.getElementById("button")


function clickMe() {
    let numberOfBgColor = bgColorsArray.length
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColor)

    if (numberOfBgColor === randomBgColorIndex) {
        randomBgColorIndex = numberOfBgColor - 1
    }

    let randomBgColor = bgColorsArray[randomBgColorIndex]

    bgContainer.style.backgroundColor = randomBgColor
}