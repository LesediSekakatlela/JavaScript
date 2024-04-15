/*While Loop Page 88*/
let i = 0;

while (i < 10) {
console.log(i);
i++;
}

/*Page 89*/
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
if (someArray[0] === "Louiza") {
console.log("Found her!");
notFound = false;
} else {
someArray.shift();
}
}

console.log(someArray);

/*Page 89 and 90*/
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

/* Do while Loop Page 91*/
let number;
do {
number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));