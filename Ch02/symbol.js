/*Page 25 Symbol*/
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);

let sym1 = Symbol("JavaScript is fun!"); // False 
let sym2 = Symbol("JavaScript is fun!"); //False 
console.log("These two Symbols are the same:", sym1 === sym2);  //False === False    


/*page 26 Undefined*/
let unassigned;
console.log(unassigned);

/*NB! NOT GOOD PRACTIC*/
let terribleThingToDo = undefined;
console.log(terribleThingToDo);


/*Page 26 and 27 Null*/
let firstName = undefined;
let lastName;
console.log("Same undefined:", lastName === firstName);

let betterOption = null;
console.log("Same null:", lastName === betterOption);


/*Example using if statement*/
let empty = null; // the variable 'empty' doesn't have any  value yet.

//empty = "yey"; // value.

if (empty === null) {
    console.log("No value for empty");
} else {
    console.log("The value of empty is: " + empty);
}

