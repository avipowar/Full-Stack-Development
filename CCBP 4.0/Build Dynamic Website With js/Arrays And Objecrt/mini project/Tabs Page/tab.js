// tabs
let aboutTab = document.getElementById("aboutTab")
let timeToVisitTab = document.getElementById("timeToVisitTab")
let attractionsTab = document.getElementById("attractionsTab")

// buttons
let aboutButton = document.getElementById("aboutButton")
let timeToVisitButton = document.getElementById("timeToVisitButton")
let attractionsButton = document.getElementById("attractionsButton")


function aboutSectionDisplay() {
    // add tab class
    aboutTab.classList.remove("d-none")
    timeToVisitTab.classList.add("d-none")
    attractionsTab.classList.add("d-none")
    // add btn class
    aboutButton.classList.add("selected-button")
    timeToVisitButton.classList.remove("selected-button")
    attractionsButton.classList.remove("selected-button")
}

function timeVisitSectionDisplay() {
    // add tab class
    aboutTab.classList.add("d-none")
    timeToVisitTab.classList.remove("d-none")
    attractionsTab.classList.add("d-none")
    // add btn class
    aboutButton.classList.remove("selected-button")
    timeToVisitButton.classList.add("selected-button")
    attractionsButton.classList.remove("selected-button")
}

function attractionSectionDisplay() {
    // add tab class
    aboutTab.classList.add("d-none")
    timeToVisitTab.classList.add("d-none")
    attractionsTab.classList.remove("d-none")
    // add btn class
    aboutButton.classList.remove("selected-button")
    timeToVisitButton.classList.remove("selected-button")
    attractionsButton.classList.add("selected-button")
}
