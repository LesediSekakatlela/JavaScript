document.cookie = "name=Maaike;favoriteColor=black";

let cookie = decodeURIComponent(document.cookie);
let cookieList = cookie.split(";");
for (let i = 0; i < cookieList.length; i++) {
    let c = cookieList[i];
    if (c.charAt(0) == " ") {
        c = c.trim();
    }
    if (c.startsWith("name")) {
        alert(c.substring(5, c.length));
    }
}

// Line 3 retrieves all the cookies associated with the current document, decodes them, and stores them in the variable cookie.

// Line 4 splits the decoded cookie string into an array of individual cookies. Each cookie in the array will be a string containing both the name and the value of the cookie.

// Within each iteration of the loop, this line 6 assigns the current cookie string to the variable c.

// Line 7 checks if there's any extra space at the beginning of each cookie string. If there is, it removes or trims that space on Line 8. This makes sure that the handling of cookies is consistent and accurate.

// The last if statement checks if the cookie's name starts with "name". If it does, it extracts the value of the cookie (excluding the "name=" part) and displays it in an alert dialog box.


// let cookie = decodeURIComponent(document.cookie);
// console.log("Decoded Cookie:", cookie);

// let cookieList = cookie.split(";");
// console.log("Split Cookies:", cookieList);

// for (let i = 0; i < cookieList.length; i++) {
//     let c = cookieList[i];
//     if (c.charAt(0) == " ") {
//         c = c.trim();
//     }
//     console.log("Processing Cookie:", c);
//     if (c.startsWith("name")) {
//         console.log("Found Matching Cookie:", c);
//         alert(c.substring(5, c.length));
//     }
// }