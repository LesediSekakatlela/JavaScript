//Parent Class
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    //This method is responsible for simulating the vehicle's movement. When called,
    // it logs a message to the console indicating the current speed of the vehicle.
    move() {
        console.log("moving at", this.currentSpeed);
    }
    //This method is used to increase the speed of the vehicle by a certain amount specified by the amount parameter.
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

/* child class Motorcycle is defined, which extends the parent class Vehicle. 
This means that the Motorcycle class inherits all the properties and methods from the Vehicle class 
and can also have its own unique properties and methods.*/
//Child Class
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();