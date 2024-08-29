/*const scope Page 133*/
function doingStuff() {
    if (true) {
        var p = "local";
    }
    console.log(p);
}

doingStuff();

/* Page 134*/
let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);
function creatingNewScope(v) {
    console.log("Access to global vars inside function.", globalVar);
}
creatingNewScope("some parameter");
console.log("Still available:", globalVar);

/*You have a global variable globalVar declared with the value "Accessible everywhere!". 
This variable is accessible from anywhere within the script.
You log the value of globalVar to the console outside of any function. This will display the value of globalVar
at this point in the code execution.
You define a function called creatingNewScope that takes a parameter x. Inside this function, you log the value of globalVar 
to the console. Since globalVar is defined globally, it's accessible from within the function.
You call the creatingNewScope function with the argument "some parameter". Inside this function, you access globalVar and log its value.
After the function call, you log the value of globalVar to the console again. This demonstrates that globalVar is still accessible and retains 
its value outside of the function.*/

/*135*/
let c = "global";

function doingStuff() {
    let x = "local";
    console.log(x);
}

doingStuff();
console.log(c);

/*Page 136*/
var a = "global";

function confuseReader() {
    a = "Guess my scope...";
    console.log("Inside the function:", a);
}
confuseReader();
console.log("Outside of function:", a);