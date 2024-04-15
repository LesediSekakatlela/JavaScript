/*page 23*/
let intNr2 = 1;
let decNr = 1.5;
let expNr = 1.4e15;

console.log((intNr2 + decNr) * expNr ); 
/*NB! output does not have e 
reason -> When JavaScript performs basic math operations involving numbers written in scientific notation 
(using the e notation), it automatically converts them to regular numbers before performing the operation.
Meaning JavaScript knows this format, you can write 1.4e15 to represent a very large number, but but when 
you use it in calculations, JavaScript treats it like any other number without the e.*/


/*page 24 example*/
let bigNr = 90071992547409920n;
let intNr = 3434;
/*this line is converting the intNr into BigInt, because you can't directly add a regular integer to a BigInt 
in JavaScript without explicit conversion.*/
let result = bigNr + BigInt(intNr); 
console.log(result); 



