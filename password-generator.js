// Github : https://github.com/eg
// Repo : https://github.com/eg/password-generator
// Licence : MIT

var passLetterUp = "ABCDEFGHIJKLMNOPRSTUVWYZ";
var passLetterLow = "abcdefghijklmnoprstuvwyz";
var passNumbers = "1234567890";
var passSymbols = "!^+%&/()=?@_-<>.,";

function getPassLetterUp() {
    return passLetterUp[Math.floor(Math.random() * passLetterUp.length)]
}
function getPassLetterLow() {
    return passLetterLow[Math.floor(Math.random() * passLetterLow.length)]
}
function getPassNumbers() {
    return passNumbers[Math.floor(Math.random() * passNumbers.length)]
}
function getPassSymbols() {
    return passSymbols[Math.floor(Math.random() * passSymbols.length)]
}

function PasswordGenerator(t) {
    if (t) {
        if (typeof (t) === "number") {
            let p = "";
            for (let i = p.length; i < t; i++) {
                const c = GenerateNow();
                p += c;
            }
            return p
        }
        else {
            console.log("This is not a number. Type a number.");
        }
    }
    else {
        console.log("Type the length of the password you want to be generated")
    }
}

function GenerateNow() {
    char = []
    char.push(getPassLetterUp())
    char.push(getPassLetterLow())
    char.push(getPassNumbers())
    char.push(getPassSymbols())
    char = char[Math.floor(Math.random() * char.length)]
    return char
}