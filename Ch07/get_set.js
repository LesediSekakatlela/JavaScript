class Person {
    //declaring private class properties / fields 
    #firstname;
    #lastname;
    constructor(firstname, lastname) { //two parameters
        //Assigning parameters to the private fields
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    //using get to get the property
    get firstname() {
        return this.#firstname;
    }
    // Thes set method is used to update the value
    set firstname(firstname) {
        this.#firstname = firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }
}
let p = new Person("Maria", "Saga");
console.log(p.firstname);