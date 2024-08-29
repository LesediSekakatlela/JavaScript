/*Page 118*/
function sayHello() {
    let you = prompt("What's your name? ");
    console.log("Hello", you + "!");
}
sayHello();

/*Page 119*/
let varContainingFunction = function () {
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
};
varContainingFunction();

/*Parameters and arguments Page 120 and 121*/
/*With Function*/
function tester(para1, para2) {
    return para1 + " " + para2;
}

const ar1 = 10;
const ar2 = 20;

const result2 = tester(ar1, ar2);

console.log(result2); // Output: 10 20

/*When you call the tester function with ar1 and ar2 as arguments, it concatenates them together with a space in between. 
So, ar1 is converted to the string "10", ar2 is converted to the string "20", and then they are concatenated with the space " " 
resulting in the string 10 20. This string is then returned by the tester function, and when you log it to the console, you see 10 20.*/

/*Without Function*/
const arg1 = 10;
const arg2 = 20;

const result = arg1 + " " + arg2;

console.log(result); // Output: 10 20

function addTwoNumbers(x, y) {
    const num = x + y;
    console.log(num);
}
addTwoNumbers(12, -90);

/*Page 122*/
// function addNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addNumbers();
// addNumbers(6, 6);
// addNumbers(10);


/* Page 125 using arrow function*/
function num (x,y){
    console.log(x + y)
}
num(5, 3);

let num = (x, y) => console.log(x + y);  
num(5, 3);

// /*foreach() function*/
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(b => console.log(b));
//A function in JavaScript that takes a callback function as an argument and applies it to each element of the array.
//In this case, the callback function is defined inline using an arrow function b => 
//This code will log each element of the arr array ("squirrel", "alpaca", and "buddy") to the console, one by one.

/*Page 126*/
//The spread operator provides a short way to concatenate arrays or insert array elements into another array.
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr1 = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr1, ...arr2);
// addFourNumbers(5, 9, 6, 7);

/*Returning function values 127*/
// let favoriteSubject = prompt("What is your favorite subject?");
// function num1(x, y) {
//     return x + y;
// }

// let output = num1(4, 5);
// console.log(output);

// let results = [];

// for (let i = 0; i < 10; i++) {
//     let result = num1(i, 2 * i);
//     results.push(result);
// }

// console.log(results);


