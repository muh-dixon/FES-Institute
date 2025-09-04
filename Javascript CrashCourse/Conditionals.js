//How to use conditional statements in JavaScript

//Create two boolean variables
//boolean variables can only be true or false
let subscribed = false;
let loggedIn = true;

//if means if this condition is true, then do this  
if (subscribed === true) {
    console.log("Show the video");
}

//else if means else if the previous if statement is false, then check this condition
else if (loggedIn === true) {
    console.log("Tell user to subscribe to see the video");
}

//else means if all previous if and else if statements are false, then do this
else{
    console.log("Tell user to login or subscribe to see the video");
} 

//example 1
let cash = 49;
let price = 50;

//print out how much cash you have and the price of the item
console.log("You have $" + cash);
console.log("The item costs $" + price);

//Check for overpayment
//Greatr than operator >
if (cash > price) {
    //If you use double quotes, you have to use + to concatenate variables and strings
    console.log("You paid purchased the item, here's your change $" + (cash - price) + " left");
}

//Check for exact payment
//Equality operator ===
else if (cash === price) {
    console.log("You purchased the item with exact change, have a nice day!");
}

//Check for underpayment
else {
    //Use back ticks to insert variables into strings
    console.log(`You don't have enough money to purchase this item, you need $${price - cash} more`);
}

//example 2
let currencey = 0;
let cost = 1;   
let isStoreOpen = true;

//Check if you have enough money and if the store is open
//Logical AND operator &&
if (cash >= cost && isStoreOpen == true) {
    console.log("You purchased the item, here is your recipt have a nice day!");
}

//Check if you have enough money or if the store is open
//Logical OR operator ||
else if (cash >= cost || isStoreOpen) { 
    console.log("You purchased the item, here is your recipt have a nice day!");
}

//Store is closed you have money
else {
    console.log("The store is closed, please come back later");
}

//Falsy values in JavaScript
//false
//0 (zero)
//"" (empty string)
//null
//undefined
//NaN (not a number)

//Truthy values in JavaScript
//true
//any number greater than zero (positive or negative)
//" " (any string with at least one character, including a space)
//[] (an empty array)
//{} (an empty object)

//Fun tip: You can use the !! in the console to see if a value is truthy or falsy
//Example: !!0 will return false, !!"hello" will return true

//Ternary operator
//A shorter way to write an if-else statement
//condition ? exprIfTrue : exprIfFalse
//You want to use ternary operators for simple if-else statements

//Example 1
let hot = true;
//If hot is true, print "It's a hot day", otherwise print "It's a cold day"
hot ? console.log("It's a hot day") : console.log("It's a cold day");

//Example 2
//If subscribed is true, print "Show the video", otherwise check if loggedIn is true, if so print "Tell user to subscribe to see the video", otherwise print "Tell user to login or subscribe to see the video"
subscribed ? console.log("Show the video") : loggedIn ? console.log("Tell user to subscribe to see the video") : console.log("Tell user to login or subscribe to see the video");

//Example 3
//You can also use ternary operators to assign values to variables
//This makes your code cleaner and easier to read
let final = currencey >= cost && isStoreOpen ? "You purchased the item, here is your recipt have a nice day!" : "The store is closed, please come back later";
console.log(str);