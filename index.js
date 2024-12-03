const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//hook up button with password generator function
let buttonEl = document.getElementById("generate-btn")
buttonEl.addEventListener("click", generatePassword)


//function for retrieving password requirements set by user
function getPasswordReq() {
    let lengthInput = document.getElementById("length-select")
    let specialCharInput = document.getElementById("specialchar-checkbox").checked
    //return object with password requirements
    return {
        length: +lengthInput.value,
        specialChars: specialCharInput
        }
}

function generatePassword() {
    //get <div> elements to generate passwords into
    let pw1El = document.getElementById("pw1-div")
    let pw2El = document.getElementById("pw2-div")
    //clear existing passwords
    pw1El.textContent = ""
    pw2El.textContent = ""
    //set character range based on requirement on special characters
    if (getPasswordReq().specialChars === true) {
        var charRange = characters.length
    }
    else {
        var charRange = characters.length - 29
    }
    // get random characters from array
    for (i=1; i<(getPasswordReq().length +1); i++) {
        let randomChar = Math.floor(Math.random()*charRange)
        pw1El.textContent += characters[randomChar]
        randomChar = Math.floor(Math.random()*charRange)
        pw2El.textContent += characters[randomChar]
}
}


function copyPw(pwSelector) {
    let copyText = document.getElementById(pwSelector)
   // Copy the text inside the text field if it hasn't been copied already
   if (copyText.textContent != "Password copied")
   navigator.clipboard.writeText(copyText.textContent)
   // Display confirmation message
   copyText.textContent = "Password copied"
   copyText.style.color = "lightgreen"
}
