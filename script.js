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


let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordThree = document.getElementById("password-three");
let passwordFour = document.getElementById("password-four");


let passwordLength = document.getElementById("password-length");

let generatedPasswords = [];


let generateButton = document.querySelector("button");

generateButton.addEventListener("click", generatePasswords);

function generatePasswords() {

    generatedPasswords = [];

    for (let i=0; i < 4; i++) {

        let password = "";
        
        for (let i=0; i < passwordLength.value; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        generatedPasswords.push(password);

    }

    console.log(generatedPasswords)

}