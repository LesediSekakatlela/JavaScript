/*break and continue Page 107*/

let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

/*Break using for Loop Page 108*/
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 4) {
        break;
    }
}

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car and can stop looking:", car[i]);
            break;
        }
    }
}

/*Page 109*/
while (true) {
    if (superLongArray[0] != 42 && superLongArray.length > 0) { //This condition checks if the first element of the superLongArray is not equal to 42 AND if the array is not empty.
        superLongArray.shift(); // Removes the first element from superLongArray. if its true 
    } else {
        console.log("Found 42!");
        break;
    }
}

/*continue 110*/
for (let car of cars) {
    if (car.color !== "black") { //This condition checks if the color of the current car object is not "black".
        continue;
    }
    if (car.year >= 2020) {
        console.log("sure, let's get this one:", car);
    }
}

// let's only log the odd numbers to the console
let i = 1;
while (i < 50) {
    i++;
//If a number can be divisible by 2 (it's an even number), the result of % 2 will be 0, and thus % 2 === 0 will be true.
//If a number cannot be divisible by 2 (it's an odd number), it won't provide the value 0, and thus % 2 === 0 will be false.
    if ((i - 1) % 2 === 0) { //(i - 1) is used to print the numbers from 1 to 49 and checks if if the previous number is even.
        continue;
    }
    console.log(i - 1);
}