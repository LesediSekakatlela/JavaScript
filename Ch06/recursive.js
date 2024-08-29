/*Recursion is the technique of making a function call itself. This technique provides a way 
to break complicated problems down into simple problems*/
/*Page 138*/

function getRecursive(s) {
    console.log(s);
    //if(s > 0) {
    getRecursive(--s);
    //}
}
getRecursive(3);
//You have a function named getRecursive that takes a parameter s.
//Inside the getRecursive function, you log the value of s to the console.
//The getRecursive function calls itself recursively with the parameter --s. The -- operator decrements the value of s by 1 before passing it to the next recursive call.
//The recursive call continues until a base case is reached. In this case, there's no explicit base case defined, so the recursion will continue until an error occurs.
//Finally, you invoke the getRecursive function with an initial value of 3.

function logRecursive(pr) {
    console.log("Started function:", pr);
    if (pr > 0) {
        logRecursive(pr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function:", pr);
}
logRecursive(3);

/*Nested Functions Page 141*/
function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
        console.log(x + 7);
        console.log("I can access outer variables:", nr);
    }
}

doOuterFunctionStuff(2);
/* line 30 declares a function named doOuterFunctionStuff that takes one parameter nr.
The function doInnerFunctionStuff is executed with the nr parameter passed to doOuterFunctionStuff.
line 33 declares a nested function named doInnerFunctionStuff that takes one parameter x.
Inside doInnerFunctionStuff, it adds 7 to the value of x (which is the same as nr passed from doOuterFunctionStuff) and logs the result. 
Then, it logs a message indicating that it can access outer variables, followed by the value of nr.
on line 39 doOuterFunctionStuff function is invoked with the argument 2, triggering the execution of all the above steps.*/

function doOuterFunction(t) {
    doInnerFunction(t);
    function doInnerFunction(x) {
        let z = 10;
    }
    console.log("Not accessible:", z);
}
doOuterFunction(2);


function doOuterStuff(l) {
    doInnerStuff(l);
    function doInnerStuff(x) {
        let z = 10;
    }
}
doInnerStuff(3);

/*Page 144*/
let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 1000);
setInterval(youGotThis, 1000);