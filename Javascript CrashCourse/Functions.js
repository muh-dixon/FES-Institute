//How to use functions in JavaScript

//Function Declaration
//parameters are placeholders for values and have unlimited options
function welcomeToFES(name) {
    //Use backticks for string interpolation
    return `Welcome to FES, ${name}!`
}

//Function Call
//arguments are the actual values you pass into the function
console.log(welcomeToFES(`Alice`));
console.log(welcomeToFES(`Bob`));

//Example 1: Function to add two numbers
function calculateArea(length, width) {
    return `Length x width = ${length * width}`;
}

console.log(calculateArea(5, 10)); // Output: 50

//Example 2: Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return `${celsius} degrees celsius is ${(celsius * 9/5) + 32} degrees fahrenheit`;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));