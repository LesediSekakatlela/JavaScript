/*for in loop Page 103*/
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

for (let prop in car) {
    console.log(car[prop]);
}

/*Looping over objects by converting to an array Page 104*/
let car2 = {
    model: "Rio",
    make: "kia",
    year: 2012,
    color: "Brown",
};

/*Fetching the elements or the keys Page 105*/
let arrKeys = Object.keys(car);
console.log(arrKeys);

/*We can loop over the properties of this array like this using the for of loop:*/
for(let key of Object.keys(car)) {
console.log(key);
}

/*Fetching the values*/
for(let key of Object.values(car)) {
    console.log(key);
    }
