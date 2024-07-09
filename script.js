const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordLength = 15;
let password1 = ""
let password2 = ""

function randomChar() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += randomChar();
    }
    return password;
}

let generatePasswordBtn = document.getElementById("btn-el")

generatePasswordBtn.addEventListener("click", ()=> {
     password1 = generatePassword(passwordLength);
     password2 = generatePassword(passwordLength);
    
    let passwordEl = document.getElementById("password-box-one")
    let passwordIl = document.getElementById("password-box-two")
    
    passwordEl.textContent = password1
    passwordIl.textContent = password2
})

let copy1Btn = document.getElementById('copy-el')
copy1Btn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(password1)
    alert("Copied the text: " + password1);
})


let copy2Btn = document.getElementById('copy-il')
copy2Btn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(password2) //Browser ka inbuilt command h to copy in the clipboard
    alert("Copied the text: " + password2);
})