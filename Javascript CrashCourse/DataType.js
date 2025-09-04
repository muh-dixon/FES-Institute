//Data Types in JavaScript

// How to combine stirngs
console.log("Hello World," + " testing"); // Outputs "Hello World, testing"

// How to use indexes
console.log("hello World" [10]) // Outputs the character at index 10

// How to use length property
console.log("Hello World".length); // Outputs the length of the string  

// How to use variables to store strings
// How to use the string length property with variables to get the last character of a string
let str = "Shabil"; // Declare a variable and assign a string to it
console.log(str[str.length - 1]); // Outputs the last character of the string

// Mathematical Operators
console.log("Modulus operation: 10 % 3 =" , 10 % 3); // Modulus operator gives the remainder
console.log("Division operation: 10 / 3 =" , 10 / 3); // Division operator gives the quotient
console.log("Exponential operation: 10 ** 3 =" , 10 ** 3); // Exponentiation operator gives the power
console.log("Multiplication operation: 10 * 3 =" , 10 * 3); // Multiplication operator gives the product
console.log("Addition operation: 10 + 3 =" , 10 + 3); // Addition operator gives the sum
console.log("Subtraction operation: 10 - 3 =" , 10 - 3); // Subtraction operator gives the difference
console.log("Order of operations: 10 + 3 * 2 =" , 10 + 3 * 2); // BODMAS rule applies
console.log("Order of operations: (10 + 3) * 2 =" , (10 + 3) * 2); // BODMAS rule applies

//Boolean Operators
console.log("Greater than operation: 10 > 3 =", 10 > 3); // Greater than operator
console.log("Less than operation: 10 < 3 =", 10 < 3); // Less than operator
console.log("Greater than or equal to operation: 10 >= 3 =",10 >= 3); // Greater than or equal to operator
console.log("Less than or equal to operation: 10 <= 3 =", 10 <= 3); // Less than or equal to operator
console.log("Equality operation: 10 == 3 =",10 == 3); // Equality operator
console.log("Not equal to operation: 10 != 3 =",10 != 3); // Not equal to operator
console.log("Strict equality operation: 10 === 3 =",10 === 3); // Checks values and types equality operator
console.log("Strict not equal to operation: 10 !== 3 =",10 !== 3); // Checks values and types not equal to operator
console.log("Logical AND operation: 10 > 3 && 10 < 20 =",10 > 3 && 10 < 20); // Logical AND operator
console.log("Logical AND operation: 10 > 3 || 10 < 20 =",10 > 3 || 10 < 20); // Logical OR operator
console.log("Logical NOT operation: !(10 > 3) =",!(10 > 3)); // Logical NOT operator
console.log("Logical NOT operation: !(10 < 3) =",!(10 < 3)); // Logical NOT operator

//variables
let fullName = "Shabil Dixon"; // Declare a variable and assign a string to it
console.log("Full name: " + fullName); // Outputs the value of the variable

//constants variables
const pi = 3.14; // Declare a constant variable and assign a value to it
console.log("Value of pi: " + pi); // Outputs the value of the constant variable
// pi = 3.14159; // This will throw an error because constant variables cannot be reassigned

//Celcius to Fahrenheit conversion
let celcius = 37; // Declare a variable and assign a value to it
let fahrenheit = (celcius * 9/5) + 32; // Convert Celcius to Fahrenheit
console.log(celcius + "°C is equal to " + fahrenheit + "°F"); // Outputs the result