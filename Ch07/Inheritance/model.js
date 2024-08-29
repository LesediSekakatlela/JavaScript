document.addEventListener("DOMContentLoaded", function() {
    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    // let mycar = new Model("Ford", "Mustang");
    // document.getElementById("demo").innerHTML = mycar.show();
    let mycar = new Model("Ford", "Mustang");
    console.log(mycar.show());
});

/*document: This refers to the HTML document itself.
addEventListener: This is a method used to register an event listener on a DOM element. 
It takes two parameters: the event type to listen for, and the function to call when the event occurs.
"DOMContentLoaded": This is the event type, indicating that the DOM content has been loaded.
function() { ... }: This is the callback function that will be executed when the "DOMContentLoaded" event occurs. 
In this case, it contains the code that you want to run when the DOM is fully loaded.
By wrapping your code inside this event listener, you ensure that it runs only after the DOM is ready,
 which is crucial for manipulating DOM elements safely.*/
