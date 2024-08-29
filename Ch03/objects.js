/*Page 61 Objects*/
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};
//You can use both the dot notation and square brackets to get the value of the dog
let dogColor1 = dog["color"];
let dogColor2 = dog.color;
console.log(dogColor1);
console.log(dogColor2);

/*Change the Values Page 62*/
dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog.weight);
console.log(dog.color);

/*Page 64*/
let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

company.address.zipcode = "33117";
company["address"]["number"] = "100";

console.log(company.address.zipcode);
console.log(company.address.number);

/*Page 65 Arrays in objects*/
let company2 = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

let activity = company2.activities[1];
console.log(activity);

/*Objects in arrays 66*/
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
}];

//Calling the street value using the first object 
let streetName = addresses[0].street;
console.log(streetName);

/*Objects in arrays in objects Page 66*/
let company3 = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};

let nameOfStreet = company3.address[1].street;
console.log(nameOfStreet);

/*address is an array containing two elements, each representing a different address. 
Each address is an object with properties like street, number, zipcode, city, and state.
ompany3.address[1] accesses the second element (index 1) in the address array, which corresponds to the second address object.
*/

