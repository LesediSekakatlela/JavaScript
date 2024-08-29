function setCookie(e) {
    document.cookie = "name=" + e.value + ";";
}
function sayHi(key) {
    let name = getCookie(key);
    document.getElementById("hi").innerHTML = "Hi " + name;
}
function getCookie(key) {
    let cookie = decodeURIComponent(document.cookie);
    let cookieList = cookie.split(";");
    for (let i = 0; i < cookieList.length; i++) {
        let c = cookieList[i];
        if (c.charAt(0) == " ") {
            c = c.trim();
        }
        if (c.startsWith(key)) {
            console.log("hi" + c);
            return c.substring(key.length + 1, c.length);
        }
    }
}

// In the setCookie function takes a single parameter which is e or an element which represents a user inputfield.
// The function sets a cookie named 'name' by accessing the value property of the input element and assigning it directly to document.cookie.

// This function retrieves a value associated with a given key from a cookie, then it updates the content of an HTML element with the id "hi" to display a greeting message including the retrieved name.

