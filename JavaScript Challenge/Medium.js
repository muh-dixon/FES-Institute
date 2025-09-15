function falsyOrTruthy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}

console.log(falsyOrTruthy(false, "hello"));

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3, 4, 5]));

function arrLast(arr) {
    return arr[arr.length - 1];
}

console.log(arrLast([1, 2, 3, 4]));
console.log(arrLast(["cat", "dog", "duck"]));

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(arrSum([1, 2, 3, 4, 5]));

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(progressiveSum(3));

function calcTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if (minutes.toString().length === 1){
        minutes = "0" + minutes;
    }

    return minutes + ":" + remainingSeconds;
}

console.log(calcTime(70));

function getMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
}

console.log(getMax([1, 5, 90, 25, 3, 105, 7]));

function reverseString(str) {
    let reverse1 = "";
    let reverse2 = "";

    //Incrementing for loop
    for (let i = 0; i < str.length; i++) {
        reverse1 = str[i] + reverse1;
    }
    //Decrementing for loop
    for (let z = str.length - 1; z >= 0; z--) {
        reverse2 += reverse2 + str[z];
    }
    //Array reverse property
    return str.split('').reverse().join('');
}

console.log(reverseString('718945'));


function arrToZero(arr) {
    return arr.map(elem => 0);
}

console.log(arrToZero([1, 2, 3]));

function removeStr1(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 'Apple') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
 
console.log(removeStr1(['banana', 'Apple', 'Tomato']))

function removeStr2(arr) {
    return arr.filter(elem => elem !== 'Apples')
}

console.log(removeStr2(['bake', 'cake', 'Apples', 'Pineapple', 'Cucumber']))

function removeFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(removeFalsy(['', 0, null, undefined, 1, 10, 16]))

function TrueFalse(arr) {
   return arr.map(elem => !!elem);
}

console.log(TrueFalse(['', 0, null, undefined, 1, 10, 16]));