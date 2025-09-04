//How to use loops in JavaScript

//DRY - Don't Repeat Yourself

//While Loop
let count = 0;

while(count <= 100) {
    console.log("While Loop: " + count);
    count = count + 1;
}

//For Loop
for(let i = 0; i <= 100; i++) {
    console.log("For Loop: " + i);
}

//Example 

for(let x = 1; x <=20; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x + " Frontend Simplified");
    }

    else if (x % 5 === 0) {
        console.log(x + " Simplified");
    }

    else if (x % 3 === 0) {
        console.log(x + " Frontend");
    }

    else {
        console.log(x);
    }
}

//Example 2
let str = "Frontend Simplified"

for(let y = 0; y < str.length; ++y) {
    console.log(str[y]);
}