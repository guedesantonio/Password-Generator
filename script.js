// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Prompts for password criteria
  let passwordLenght = prompt("How long do you want your password?")
  // ADD CHECKER FOR PASSWORD LENGHT CRITERIA******************************
  let passwordCase = confirm("Does your password needs uppercase letters?");
  let passwordNumbers = confirm("Does your password needs numbers?");
  let passwordSpecial = confirm("Does your password needs special characters?")
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
// *******************CREATE QUESTION PASSWORD LENGHT*******************
  passwordText.value = password;
}
// generate random password function
function generatePassword(){
  if (passwordCase===true) {


    
  }
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  let password = "";

  // loop to create random characters
  for (let i = 0;i<=passwordLenght;i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.lenght - 1)));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
