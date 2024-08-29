// Original string
let originalString = "How's it going?";

// Encode the original string
let encodedString = encodeURIComponent(originalString);
console.log("Encoded string:", encodedString);

// Decoding the encoded string
let decodedString = decodeURIComponent(encodedString);
console.log("Decoded string:", decodedString);

// Concatenate base URL and query string into one line
let webURI = "http://www.basescripts.com?message=Hello World";

// Encode the web URI
let encodedWeb = encodeURIComponent(webURI);

// Output the encoded web URI
console.log("Encoded Web URI:", encodedWeb);
