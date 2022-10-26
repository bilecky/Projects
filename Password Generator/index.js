const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordArr1 = []
let passwordArr2 = []
let firstPassword = document.querySelector('.password1')
let secondPassword = document.querySelector('.password2')


console.log(firstPassword)
function generatePass() {
    for (i = 0; i < 16; i++) {
    const random = Math.floor(Math.random() * characters.length);
        const random2 = Math.floor(Math.random() * characters.length);

passwordArr1.push(characters[random])
passwordArr2.push(characters[random2])
firstPassword.textContent = passwordArr1.join('')
secondPassword.textContent = passwordArr2.join('')

} 
passwordArr1 = []
 passwordArr2 = []
}

