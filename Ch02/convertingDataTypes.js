/*Converting data types  Page 29*/
let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);

let nr3 = 2;
let nr4 = "2";
console.log(nr1 + nr2);
//console.log(nr1 + Number(nr2)); // The string gets converted to a number before it executes the plus operation


/*Page 30*/
let number = 6;
number = String(number);
console.log(number, typeof number);

let Str1 = "12";
Str1 = Number(Str1);
console.log(Str1, typeof Str1);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);


/*Subtraction Page 33*/
let num1 = 20;
let num2 = 4;
let str1 = "Hi";
let num3 = 3;
let result1 = num1 - num2;
let result2 = str1 - num3;
console.log(result1, result2);


