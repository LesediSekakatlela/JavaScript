/*Creating an array Page 48*/
arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

//This line creates an array arr3 with a length of 10 elements, but all elements are initially undefined. 
arr3 = new Array(10);
//This line creates an array arr4 containing a single element, the number 10.
arr4 = [10];

//This prints the contents of arr3 to the console. Since arr3 was created with a length of 10 but no values assigned, 
//it will show an array with 10 undefined elements.
console.log(arr3);

//This prints the contents of arr4 to the console, which is [10], an array containing a single element, the number 10.
console.log(arr4);

//This prints the type of arr1 to the console using the typeof operator. It will output "object", as arrays are objects in JavaScript.
console.log(typeof arr1);


/*Page 49*/
const arr = ["hi there"];
arr[0] = "new value";   //This line modifies the first element of the array arr by assigning the string "new value" to it. 
console.log(arr[0]);    // this line prints the first element of the array arr to the console. 
//arr = ["nope, now you are overwriting the array"];
/*the code successfully changes the value of the first element of the array arr, but it fails when attempting to reassign
the entire array due to the use of const.
arr = ["nope, now you are overwriting the array"];: This line tries to reassign the entire arr variable to a new array. 
However, since arr is declared as a const, you cannot reassign it to a new array. This line will cause an error.*/

/*Accessing elements Page 50*/
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);

/*Overwriting elements*/
cars[0] = "Tesla";
console.log(cars[0]);
//console.log(cars);

cars[3] = "Kia";
cars[-1] = "Fiat";

console.log(cars[3]);
console.log(cars[-1]);
console.log(cars)

/*an indexing of an array starts from 0 therefore, you are adding another index array which is this line cars[3] = "Kia"; 
and assigning it the value kia.
but for the second code you are creating a property named -1 and assigning it the value fiat. JavaScript looka at -1 as a property key 
rather than a numeric index. It checks whether the cars array object already has a property with the key -1. If it doesn't, JavaScript 
creates a new property with the key -1 and assigns the value "Fiat" to it.
When you use non-numeric keys like -1, JavaScript treats them as regular object properties rather than array elements.*/

/*Built-in length property Page 51*/
colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

/*Page 52 Accessing the last element of the array*/
console.log(lastElement = colors[colors.length - 1]);

/*Page 52*/
numbers = [12, 24, 36];
numbers[5] = 48;      //Adding index 5 and the value 48
console.log(numbers.length);
console.log("numbers", numbers);


