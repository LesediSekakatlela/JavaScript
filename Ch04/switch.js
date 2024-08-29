/*If statement Page 77*/

let activity = "Brunch";

if (activity === "Get up") {
    console.log("It is 6:30AM");
} else if (activity === "Breakfast") {
    console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
    console.log("It is 8:00AM");
} else if (activity === "Lunch") {
    console.log("It is 12.00PM");
} else if (activity === "Drive home") {
    console.log("It is 5:00PM")
} else if (activity === "Dinner") {
    console.log("It is 6:30PM");
} else {
    console.log("I don't know this activity and cannot determine the current time.")
}

/*Switch Statement page 78*/
switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("I cannot determine the current time.");
        break;
}

/*Combining cases with Switch Page 81*/
let grade = "A";

switch(grade){
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}

/*Combining cases with IF Statement Page 82*/
if(grade === "F" || grade === "D") {
    console.log("You've failed!");
    } else if(grade === "C" || grade === "B") {
    console.log("You've passed!");
    } else if(grade === "A") {
    console.log("Nice!");
    } else {
    console.log("I don't know this grade.");
    }
