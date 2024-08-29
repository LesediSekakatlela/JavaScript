/*Adding and replacing elements Page 53*/
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");  // use push() to add elements 

let lengthOfFavoriteFruits = favoriteFruits.push("lime");

console.log(favoriteFruits);

/*splice() used to add or remove elements Page 54*/
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
//2 is the index at which the operation will start. meaning it's the third position in the array.
//0 indicates that no elements should be removed.
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

/*Combining both arrays into 1  Page 55*/
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

/*Deleting the last element is done with pop():*/
arr7.pop();

/*Deleting the first element can be done with shift().*/
arr7.shift();
arr7.splice(1, 2);

/*This is not a method, but you can use it to change the value of a certain position of the array to undefined:*/
delete arr7[0];

/*Page 56 Finding Elements*/
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (element) { return element === 6 });
let findValue2 = arr8.find(element => element === 10);
console.log(findValue, findValue2);
/*line 34 starts with creating a function and it takes in an argument 'element' and it will return true if 
the element is equal to 6 and false otherwise.
For line 35 it's using an arrow function => This is used as a callback function for the find method.The first element is the parameter of the arrow function.
console.log(findValue, findValue2) prints the values of findValue and findValue2 to the console. 
findValue will contain the value 6, and findValue2 will be undefined. 
*/

/*Page 57*/
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex, findIndex2, findIndex3);
/*So, the first one will return 1 since that is the index position of 6 in the array. 
The second one will return -1 because the array does not contain 10.
Line 47 if 6 is found after index 2, its index will be stored in findIndex3. otherwise, it will store -1.*/

/*Using lastIndexOf() to get the index of it Page 58*/
let animals = ["dog", "horse", "cat", "platypus", "dog"]
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

/*Sorting them in order*/
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();

let ages = [18, 72, 33, 56, 40];
ages.sort();

console.log(names);
console.log(ages);

/*it reverses the order.*/
names.reverse();
console.log(names);