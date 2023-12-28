let generateButton = document.querySelector("button");

generateButton.addEventListener("click", generatePasswords);

function generatePasswords() {
    console.log("Button Clicked!");
}


let simpleLetters = document.getElementById("s-letters-box");
let capitalLetters = document.getElementById("c-letters-box");
let numbersList = document.getElementById("numbers-box");
let symbolsList = document.getElementById("symbols-box");

simpleLetters.addEventListener("click", addSimpleLetters);
capitalLetters.addEventListener("click", addCapitalLetters);
numbersList.addEventListener("click", addNumbers);
symbolsList.addEventListener("click", addSymbols);


function addSimpleLetters() {
    console.log("Simple Letters Checkbox")
}

function addCapitalLetters() {
    console.log("Capital Letters Checkbox")
}

function addNumbers() {
    console.log("Numbers Checkbox")
}

function addSymbols() {
    console.log("Symbols Checkbox")
}