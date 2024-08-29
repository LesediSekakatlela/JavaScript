class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there! I'm", this.firstname);
    }
}

let p = new Person("Maaike", "Blue");
p.greet();

/*The constructor method takes two parameters: firstname and lastname. These parameters represent the first name and last name of the person respectively.
Inside the constructor, this.firstname and this.lastname are properties of the Person objects. The values passed as arguments when creating an instance of this class are assigned to these properties.

This class also has a method named greet(). This method is defined to provide a greeting message.

Line 11 creates a new Person object named person with the first name "Maaike" and the last name "Blue".
then call the greet() method on the person object using dot notation (p.greet()).
This will invoke the greet() method, which will print the greeting message to the console
*/


class Person1 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        return "Hi there!";
    }
    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}
// let r = new Person1("Sam", "White")
// let greeting = r.greet();
// let compliment = r.compliment("Harry", "hat");
// console.log(greeting + " " + compliment);

let greeting = new Person1().greet();
let compliment = new Person1().compliment("Harry", "hat");
console.log(greeting + " " + compliment);
/*The compliment() method on line 33 in the Person1 class is designed to generate a compliment directed towards someone or something
The compliment() method is defined within the Person1 class. It takes two parameters: name and object.

line 42 and 43 these two lines create instances of the Person1 class and call the greet() 
and compliment() methods on them to retrieve their respective messages,*/


class Person2 {
    /* These are private class fields declared using the private field syntax (#). 
    They are meant to hold the first name and last name of a person.*/
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
/*this.#firstname = firstname; and this.#lastname = lastname;: Inside the constructor, 
the provided first name and last name parameters are assigned to the private #firstname and #lastname fields of the class.*/
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}
let s = new Person2("Maria", "Saga");
console.log(s.firstname);
/* since firstname is a private field, it cannot be accessed from outside the class.*/