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
    if (superLongArray[0] != 42 && superLongArray.length > 0) {
        superLongArray.shift();
    } else {
        console.log("Found 42!");
        break;
    }
}

/*continue 110*/
for (let car of cars) {
    if (car.color !== "black") {
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
    if ((i - 1) % 2 === 0) {
        continue;
    }
    console.log(i - 1);
}