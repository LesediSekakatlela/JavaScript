let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

/*line 1 = creates a variable called uri and sets it to a web address, with the information which is about someone named "Maaike van Putten".

Line 2= takes the uri variable and converts it into a format that can be safely used in a web address. It's called URL encoding.

Line 3= prints out the encoded version of the web address,it shows what the web address looks like after it has been converted into a safe format.

Line 4= takes the encoded web address and converts it back to its original form.

Line 5= this line prints out the decoded version of the web address,it shows what the web address looks like after it has been converted back to its original form.

NB! think of encoding like putting a message into a box, and decoding is like taking the message out of the box when it's received.

Spaces are encoded as %20
*/



