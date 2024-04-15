/*For loop Page 93*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*Array containing only even numbers Page 94*/
let arr = [];
for (let i = 0; i < 100; i = i + 2) {
arr.push(i); //
}

/*Nested loops Page 95*/
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j); 
  }
}

console.log(arrOfArrays); // or use console.table(arrOfArrays); to create a table

/*Loops and Arrays Page 98*/
let names = ["chantal", "john", "maxime", "bobbi", "jair"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/* Page 99*/
//let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
  names[i] = "hello " + names[i];
}
console.log(names);

//let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
    if(names[i].startsWith("M")){
    delete names[i];
    continue;
    }
    names[i] = "hello " + names[i];
    }
    console.log(names);

