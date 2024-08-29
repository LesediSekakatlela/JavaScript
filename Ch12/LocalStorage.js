let message = "Hello storage!";
localStorage.setItem("example", message);
if (localStorage.getItem("example")) {
    document.getElementById("stored").innerHTML = localStorage.getItem("example");
}

// Set Item
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

// let username = "JohnDoe";
// localStorage.setItem("username", username);

// if (localStorage.getItem("username")) {
//     document.getElementById("display").innerHTML = "Welcome, " + localStorage.getItem("username") + "!";
// }
