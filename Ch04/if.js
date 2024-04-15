/*Page 72*/
let rain = true;

if(rain){
console.log("** Taking my umbrella when I need to go outside **");
} else {
console.log("** I can leave my umbrella at home **");
}



let age = 14;

/*if statement*/
if(age < 18) {
    console.log("We're very sorry, but you can't get in under 18");
    } else {
    console.log("Welcome!");
}

/*else if statement Page 74*/
if(age < 3){
    console.log("Access is free under three.");
  } else if(age >=3 && age < 12) {
    console.log("With the child discount, the access fee is 5 dollar");
  } else if(age >=12 && age < 65) {
    console.log("A regular ticket costs 10 dollar.");
  } else if(age >= 65) {
    console.log("A ticket is 7 dollars.");
  }

/*Conditional ternary operators Page 76*/

let access = age < 18 ? "denied" : "allowed";
console.log(access);

age < 18 ? console.log("denied") : console.log("allowed");