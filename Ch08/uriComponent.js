/*The encodeURIComponent() function in JavaScript is used to encode special characters in a URI (Uniform Resource Identifier) component.*/
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);

/*
: is used to separate the protocol (like "http" or "https") from the rest of the URI.
/ is used to separate different parts of the URI, such as the domain from the path.
? is used to separate the path from the query parameters.

When you use encodeURIComponent() in JavaScript, it encodes these characters along with spaces and other special characters
into a format that can be safely transmitted. 

: becomes %3A
/ becomes %2F
? becomes %3F

This encoding ensures that the URI remains valid and can be properly interpreted by web servers and browsers, 
even if it contains characters that have special meanings in the URI syntax.
*/

let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);
/*The decodeURIComponent() function in JavaScript does the opposite of encodeURIComponent().
It takes a URI component that has been previously encoded and decodes it, converting any encoded characters back to their original form.

%20 becomes a space.
%3A becomes a colon.
%2F becomes a slash.
%3F becomes a question mark.
*/





