//How to use arrays in JavaScript

//Create an array
//You can use any data type in an array
let arr = [20, 30, 40, 50];

//Accessing array 1st element
console.log(`1st element: ${arr[0]}`);

//Accessing last element
console.log(`2nd element: ${arr[arr.length - 1]}`);

//How to add elements to an array
//Using push() method to add element at the end
arr.push(60);

//Using .filter() method to create a new array
//.filter() method takes a callback function as an argument
//The callback function is called for each element in the array
//If the callback function returns true, the element is added to the new array
//If the callback function returns false, the element is not added to the new array
let newArr = arr.filter(element => element < 50);

console.log(newArr); 

//Example 

//Create an array of grades
let arr2 = ['A+', 'A', 'B+', 'FAIL', 'C+', 'FAIL', 'D+', 'D', 'FAIL'];
let arr3 = ['FAIL'];
//Create a new array with only passing grades
//Using .filter() method to create a new array
//The callback function checks if the element is not equal to 'FAIL'
let newArr2 = arr2.filter(element => element !== 'FAIL');
let newArr3 = arr3.filter(element => element !== 'FAIL');

//Print the new array
console.log(`Filtered array: ${newArr2}`);
console.log(`Empty array: ${newArr3}`);

//example 2

//How to use for loop to iterate through an array
//Check if the student has failed or passed
//If the student has failed, print 'Student has failed'
//If the student has passed, print 'Student has passed with grade: <grade>'
let grades = ['A+', 'A', 'B+', 'FAIL', 'C+', 'FAIL', 'D+', 'D', 'FAIL'];

//Using for loop to iterate through the array   
//Using if-else statement to check if the student has failed or passed
//Using template literals to print the grade
//Using === operator to check for equality
for (let i = 0; i < grades.length; i++) {
    //This checks if the grade is 'FAIL'
    if (grades[i] === 'FAIL') {
        console.log('Student has failed');
    }  
    //This runs if the grade is not 'FAIL' 
    else {
        console.log(`Student has passed with grade: ${grades[i]}`);
    }
}

//example 3
//How to add grades to an array using push() method
let grades2 = ['A+', 'A', 'B+', 'FAIL', 'C+', 'FAIL', 'D+', 'D', 'FAIL'];
let passingGrades = [];

for (let i = 0 ; i < grades2.length; i++) {
    if (grades2[i] !== 'FAIL') {
        passingGrades.push(grades2[i]);
    }       
    else {
        console.log('Student has failed');
    }
}

console.log(`Passing grades: ${passingGrades}`);

//How to use .map() method to create a new array
//.map() method takes a callback function as an argument
//The callback function is called for each element in the array
//The callback function returns a new value for each element in the array
//The new values are added to the new array
let arr4 = [1, 2, 3, 4, 5];

let newArr4 = arr4.map(element  => 'Number ' + element * 2)

console.log(`Mapped array: ${newArr4}`); 

//Example: Brute force method to convert dollars to cents
//Create an array of dollar amounts
//Create a new array with the dollar amounts converted to cents
//Using .map() method to create a new array
//The callback function multiplies each element by 100 to convert to cents
let dollars = [1, 5, 10, 20, 50, 100];

let cents = [];

for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100);
}

console.log(`Cents: ${cents}`);