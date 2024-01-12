// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please input your chosen password length, between 8 and 128 characters!")
  var characters = prompt("Please input your chosen characters for your password, between: lowercase, uppercase, numeric, special characters!")
  return [passwordLength, characters];
}

// Function for getting a random element from an array
function getRandom(arr) {
  const passwordLength = arr[0];
  const characters = arr[1];

  // Check which kind of password to be generated randomly
  if (characters === "special characters") {
    // Generate password with special characters
  }
  if (characters === "numeric") {
    // Generate password with numeric characters
  }
  if (characters === "uppercase") {
    // Generate password with uppercase characters
  }
  if (characters === "lowercase") {
    // Generate password with lowercase characters
  }
}

// Function to generate password with user input
function generatePassword() {
  const values = getPasswordOptions();
  const passwordLength = values[0]; // Assigning first prompt value to passwordLength
  const characters = values[1]; // Assining second prompt value to characters
  var errors = []; // Empty array to store errors

  // Validating password length prompt
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // Pushing error description to the array of errors
    errors.push("Your password length input must be an integer between 8 and 128");
  }

  // Valid characters to choose from
  const validCharacters = ["lowercase", "uppercase", "numeric", "special characters"];

  // Validating second prompt to make sure the chosen option is a valid one
  if (!validCharacters.includes(characters)) {
    // Pushing error description to the array of errors
    errors.push("Chosen characters for your password must be: lowercase, uppercase, numeric, special characters");
  }

  // If there are no errors, generate the password and return it
  if (!errors.length) {
    // Generate password and return
    return getRandom([passwordLength, characters]);
  }

  // If there are errors, return the array of error messages
  return errors;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if (Array.isArray(password)) {
    // Display errors
    passwordText.value = password.join("\n");
  } else {
    // Display password
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);