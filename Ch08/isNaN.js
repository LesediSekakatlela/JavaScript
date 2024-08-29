/*NaN stands for "Not a Number" in JavaScript. It is a value returned when a mathematical operation or function 
that expects a number is performed on a non-numeric value, or when a numeric operation is not possible.
In most cases, NaN is used to indicate that a value is not a valid number. 

so JavaScript start by converting the values into a number to see if they are numbers or not a number.
*/

let result =
"Is 54 NaN? " + isNaN(54) + "<br>" +
"Is 3.52552 NaN? " + isNaN(3.52552) + "<br>" +
"Is 11+35-2 NaN? " + isNaN(11+35-2) + "<br>" +
"Is -5 NaN? " + isNaN(-5);
document.getElementById("test").innerHTML = result;


let secResult =
"Is '123' NaN? " + isNaN('123') + "<br>" +
"Is 'Hello' NaN? " + isNaN('Hello') + "<br>" +
"Is '2005/12/12' NaN? " + isNaN('2005/12/12');
document.getElementById("test1").innerHTML = secResult;

/*In JavaScript, when you pass an empty string containing only whitespace to the isNaN() function,
 JavaScript tries to convert it to a number before determining if it's NaN or not. In this case, an empty string
 containing only whitespace cannot be converted to a number, so JavaScript considers it as NaN.

But when you pass an empty string ' 'to isNaN(), JavaScript's tries to convert it to a number.
Since it cannot be converted to a number, JavaScript provides it a value which is 0. 
Therefore, isNaN(' ') evaluates to false because 0 is a number
 */
 let thirdResult =
 "Is ' ' NaN? " + isNaN(' ') + "<br>" +
 "Is false NaN? " + isNaN(false) + "<br>" +
 "Is 0/0 NaN? " + isNaN(0/0) + "<br>"
 document.getElementById("demo").innerHTML = thirdResult;

 /* This is just how JavaScript is programmed to handle boolean values when they're used in situations where numbers are expected. 
 When you pass false to isNaN(), JavaScript first converts it to the number 0, now 0 is a a number therefore the output will be false.*/


/* For line 33 if you attempt to perform a mathematical operation such as dividing by 0 on any other non-numeric value, 
JavaScript will return NaN to indicate that the operation couldn't be performed.
*/



