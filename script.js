// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// generate random password function
function generatePassword(){
    // Prompts for password criteria

    let complexity = prompt("How long do you want your password?");
    
    // CHECK FOR PASSWORD LENGTH CRITERIA
    while (
      complexity !== null &&
      (
      isNaN(complexity) || 
          !(+complexity >=8 && +complexity <=128)
      )
    )
    {
    alert ("Invalid password lenght. Please try again");
    complexity = prompt("How long do you want your password?");
    }


    let passwordCase = confirm("Does your password needs uppercase letters?");
    let passwordNumbers = confirm("Does your password needs numbers?");
    let passwordSpecial = confirm("Does your password needs special characters?");
    let values = "";

    // criteria condition check

  if (passwordCase === true && passwordNumbers === true && passwordSpecial === true) {
     values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  }
  else if (passwordCase === true && passwordNumbers === true && passwordSpecial === false) {
     values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  }
  else if (passwordCase === true && passwordNumbers === false && passwordSpecial === true) {
     values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  }
  else if (passwordCase === true && passwordNumbers === false && passwordSpecial === false) {
    values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (passwordCase === false && passwordNumbers === true && passwordSpecial === false) {
     values = "abcdefghijklmnopqrstuvwxyz1234567890";
  }
  else if (passwordCase === false && passwordNumbers === false && passwordSpecial === true) {
     values = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  }
  else if (passwordCase === false && passwordNumbers === false && passwordSpecial === false) {
     values = "abcdefghijklmnopqrstuvwxyz";
  }
  else if (passwordCase === false && passwordNumbers === true && passwordSpecial === true) {
    values = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  }
  

  let password = "";

  // loop to create random characters

  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
