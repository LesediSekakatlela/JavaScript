class ClassName {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
let obj = new ClassName("5", "7");
console.log(obj.prop1); // Output: "arg1"
console.log(obj.prop2); // Output: "arg2"
console.log(parseInt(obj.prop1) + parseInt(obj.prop2));

/*Line 1 declares a class named ClassName. In JavaScript, classes are templates for creating objects with similar properties and methods.

The constructor method is automatically called when you create a new instance of the class. It initializes the object's properties.
In this constructor, there are two parameters: prop1 and prop2. These parameters represent the properties of the objects created from this class.

Inside the constructor, this.prop1 and this.prop2 are properties of the object being created.
The values passed as arguments when creating an instance of this class ("arg1" and "arg2") are assigned to prop1 and prop2.

Last line creates a new object using the ClassName class.
The new keyword is used to create a new instance of the class.
The arguments "arg1" and "arg2" are passed to the constructor of the ClassName class, which initializes the prop1 and prop2 properties of the object.
*/
class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

/*Line 24 declares a class named Dog. it represents individual dogs, and it will have properties and behaviors common to all dogs.

Inside the Dog class, there's a constructor method. This method initializes new instances of the Dog class.
The constructor takes four parameters: dogName, weight, color, and breed. These parameters represent the characteristics of a dog.

Inside the constructor, this.dogName, this.weight, this.color, and this.breed are properties of the Dog objects.
The values passed as arguments when creating a new instance of the Dog class are assigned to these properties.

This line creates a new object using the Dog class.
The new keyword is used to create a new instance of the class.
The arguments "JavaScript", 2.4, "brown", and "chihuahua" are passed to the constructor of the Dog class, which initializes the dogName, weight, color, and breed properties of the object respectively.
*/

console.log("Dog's Name:", dog.dogName); // Output: "Dog's Name: JavaScript"
console.log("Weight:", dog.weight); // Output: "Weight: 2.4"
console.log("Color:", dog.color); // Output: "Color: brown"
console.log("Breed:", dog.breed); // Output: "Breed: chihuahua"

console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

console.log(Object.values(dog)); // array format


class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let p = new Person("Maaike", "Green");

console.log("Hi", p.firstname);
/*Inside the parentheses of console.log(), there are two arguments separated by comma:
"Hi" is a string literal that represents a greeting message.
p.firstname is accessing the firstname property of the p variable created from the Person class.*/

console.log("Hi", p.firstname, p.lastname);