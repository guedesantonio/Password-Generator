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
    complexity = prompt("How many characters do you need in your password?");
    }
    let passwordLCase = confirm("Does your password needs lowercase letters?");
    let passwordCase = confirm("Does your password needs uppercase letters?");
    let passwordNumbers = confirm("Does your password needs numbers?");
    let passwordSpecial = confirm("Does your password needs special characters?");
    let values = "";

    // criteria condition check

  if (passwordLCase === true ){
     values += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordCase === true) {
     values += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordNumbers === true) {
     values += "0123456789";
  }
  if ( passwordSpecial === true) {
    values += "!@#$%^&*()_+";
  }
  if (passwordCase === false && passwordNumbers === false && passwordSpecial === false && passwordLCase === false) {
     alert("Your criteria is not valid, please try again.");
  }
  
  

  let password = "";

  // loop to create random characters

  for (var i = 1; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
