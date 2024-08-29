//forEach()
let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);

/*In JavaScript, the forEach function provides a way to loop over elements in an array instead of using traditional for or while loop.
 It achieves the same result as looping over the array's elements and performing a specified operation for each element. 
*/

//filter()
let arr1 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
    return typeof element === "string";
}
let filterArr = arr1.filter(checkString);
console.log(filterArr);

//Checking a condition for all elements
console.log(arr1.every(checkString));

//Replacing part of an array with another part of the array
/*The copyWithin method in JavaScript is used to copy a portion of an array to another location within the same array, overwriting existing elements.
It takes three parameters: 
target: The index at which to begin overwriting elements.
start: The index at which to begin copying elements from.
end (optional): The index at which to stop copying elements from (but not including).
*/
/*This code replaces any element from index 0 with the the element from index 3, and the range is from 0 to 4 meaning all the other elements will stay the same.*/
myArray = ["grapefruit", 4, "hello", 5.6, true];
myArray.copyWithin(0, 3, 4);
console.log(myArray);


//Mapping the values of an array
//The map() function in JavaScript takes an array, applies a function to each element of that array, 
//and returns a new array containing the results of applying the function to each element.
let arr2 = [1, 2, 3, 4];
let mapped_arr = arr2.map(x => x + 1);
console.log(mapped_arr);

/*Line 32 uses the map function on the array arr2. 
It takes each element x of the array arr2 and adds 1 to it using the arrow function x => x + 1
*/
//example using function
function addOneToValue(x) {
    return x + 1;
}

let numbersArray = [1, 2, 3, 4];
let mapped_array = numbersArray.map(addOneToValue);
console.log(mapped_array);

/*Line 39 declares a function named addOneToValue that takes a parameter x and returns x + 1, and adds 1 to the value passed to it.
Line 44 uses a map() method that loops over each element of the array, adds 1 to each element in the array and store the output to the new array.
*/
