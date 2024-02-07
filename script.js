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

document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("s-letters-box");
  checkbox.checked = true;
});

function addSimpleLetters() {
    if (simpleLetters.checked === true) {
        characters += simpleLettersList;
        console.log(characters);
    } else {
        characters = characters.replace(simpleLettersList, "");
        console.log(characters);
    }
}

function addCapitalLetters() {
    if (capitalLetters.checked === true) {
        characters += capitalLettersList;
        console.log(characters);
    } else {
        characters = characters.replace(capitalLettersList, "");
        console.log(characters);
    }
}

function addNumbers() {
    if (numbersList.checked === true) {
        characters += numbersListItems;
        console.log(characters);
    } else {
        characters = characters.replace(numbersListItems, "");
        console.log(characters);
    }
}

function addSymbols() {
    if (symbolsList.checked === true) {
        characters += symbolsListItems;
        console.log(characters);
    } else {
        characters = characters.replace(symbolsListItems, "");
        console.log(characters);
    }
}

let passwords = [document.getElementById("password-one"), document.getElementById("password-two"), document.getElementById("password-three"), document.getElementById("password-four")]


let passwordLength = document.getElementById("password-length");

let passwordAmount = document.getElementById("password-amount");

let generatedPasswords = [];


let generateButton = document.querySelector("button");

generateButton.addEventListener("click", generatePasswords);

function generatePasswords() {

    generatedPasswords = [];

    for (let i=0; i < passwordAmount.value; i++) {

        let password = "";

        for (let i=0; i < passwordLength.value; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        generatedPasswords.push(password);

    }

    console.log(generatedPasswords);


    passwords[0].textContent = generatedPasswords[0];

    if (passwordAmount.value > 3) {
      passwords[3].textContent = generatedPasswords[3];
      passwords[3].style.display = "inline";
      passwords[3].style.textAlign = "center";
      passwords[3].style.alignItems = "center";
      passwords[3].style.justifyContent = "center";
    } else {
      passwords[3].style.display = "none";
    }
    if (passwordAmount.value > 2) {
      passwords[2].textContent = generatedPasswords[2];
      passwords[2].style.display = "inline";
      passwords[2].style.textAlign = "center";
      passwords[2].style.alignItems = "center";
      passwords[2].style.justifyContent = "center";
    } else {
      passwords[2].style.display = "none";
    }
    if (passwordAmount.value > 1) {
      passwords[1].textContent = generatedPasswords[1];
      passwords[1].style.display = "inline";
      passwords[1].style.textAlign = "center";
      passwords[1].style.alignItems = "center";
      passwords[1].style.justifyContent = "center";
    } else {
      passwords[1].style.display = "none";
    }
}
