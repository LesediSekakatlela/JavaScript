/*While Loop Page 88*/
// let i = 0;

// while (i < 10) {
// console.log(i);
// i++;
// }

/*Page 89*/
let someArray = ["Mike", "Jack", "Paul", "Blue", "Sam", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {  //both conditions are true 
if (someArray[0] === "Sam") { //condition is false 
console.log("Found her!");
notFound = false; //Sets notFound to false, ending the loop.
} else {
someArray.shift(); //removes the first element from someArray
}
}

console.log(someArray);

/*Page 89 and 90*/
//This code generates the first 25 numbers of the Fibonacci sequence and stores them in an array called fibonacciArray. 
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

console.log(fibonacciArray);
/*Step 1:
nr1 = 0, nr2 = 1
Push 0 into fibonacciArray
Calculate temp = 0 + 1 = 1
Updated Value nr1 = 1
Updated Value nr2 = 1

Step 2:
nr1 = 1, nr2 = 1
Push 1 into fibonacciArray
Calculate temp = 1 + 1 = 2
Updated Value nr1 = 1
Updated Value nr2 = 2

Step 3:
nr1 = 1, nr2 = 2
Push 1 into fibonacciArray
Calculate temp = 1 + 2 = 3
Updated Value nr1 = 2
Updated Value nr2 = 3

Step 4:
nr1 = 2, nr2 = 3
Push 2 into fibonacciArray
Calculate temp = 2 + 3 = 5
Updated Value nr1 = 3
Updated Value nr2 = 5
*/

/*Example*/
let prev2 = 0;
let prev1 = 1;

console.log(prev2);
console.log(prev1);

for (let i = 0; i < 18; i++) {
  let newFibo = prev1 + prev2;
  console.log(newFibo);
  prev2 = prev1;
  prev1 = newFibo;
}


/* Do while Loop Page 91*/
// let number;
// do {
// number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));