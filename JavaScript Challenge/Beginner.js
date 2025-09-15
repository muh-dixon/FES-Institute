function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(7, 5));

function hoursToSeconds(hour) {
    return hour * 3600;
}

console.log(hoursToSeconds(10));  

function perimeterOfRectangle(width, height) {
    return (width * 2) + (height * 2);
}

console.log(perimeterOfRectangle(6, 7)); 

function calcAreaTriangle(base, height) {
    return 0.5 * (base * height);
}

console.log(calcAreaTriangle(3, 2));

function addString(word) {
    return `${word}Frontend`
}

console.log(addString("Apple"))

function greaterThan(num1, num2) {
  return (num1 + num2) > 100; 
}

console.log(greaterThan(71, 28));
console.log(greaterThan(50, 60));

function lessThanZero(num) {
    return num <= 0; 
}

console.log(lessThanZero(0));

function oppBool(value) {
    return !value;
}

console.log(oppBool(true));

function notZero(num) {
    return num !== 0;
}

console.log(notZero(5));

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4, 2)); 

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(1));

function evenOrOdd (num) {
    return num % 2 === 0 ? 1 : -1;
}

console.log(evenOrOdd(2));

function loggedAndSubbed(loginStatus, subStatus) {
    return (loginStatus === 'LOGGED_IN') && (subStatus === 'SUBSCRIBED')
}

console.log(loggedAndSubbed('LOGGED_IN','SUBSCRIBED'));