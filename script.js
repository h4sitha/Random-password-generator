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


let characters = "";

let simpleLettersList = "abcdefghijklmnopqrstuvwxyz";
let capitalLettersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbersListItems = "1234567890";
let symbolsListItems = "@#$%&(){}[]?.,~*/-+=/";


function addSimpleLetters() {
    if (simpleLetters.checked === true) {
        console.log("Simple Letters Checked")
    } else {
        console.log("Simple Letters Unchecked")
    }
}

function addCapitalLetters() {
    if (capitalLetters.checked === true) {
        console.log("Capital Letters Checked")
    } else {
        console.log("Capital Letters Unchecked")
    }
}

function addNumbers() {
    if (numbersList.checked === true) {
        console.log("Numbers Checked")
    } else {
        console.log("Numbers Unchecked")
    }
}

function addSymbols() {
    if (symbolsList.checked === true) {
        console.log("Symbols Checked")
    } else {
        console.log("Symbols Unchecked")
    }
}