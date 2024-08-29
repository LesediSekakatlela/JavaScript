/*For loop Page 93*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*Array containing only even numbers Page 94*/
let arr = [];
for (let i = 0; i < 100; i = i + 2) {
arr.push(i); 
}
console.log(arr)

/*Nested loops Page 95*/
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j); 
  }
}
console.log(arrOfArrays); // or use console.table(arrOfArrays); to create a table

/* Page 99*/
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
    if(names[i].startsWith("M")){ //This condition checks if the current element in the names array starts with the letter "M".
    delete names[i]; //If it does, delete names[i]; removes the element from the array. 
    continue; //This keyword skips the rest of the loop's code block and continues to the next iteration.
    }
    names[i] = "hello " + names[i]; // adds "hello " to the string and assigns the modified string back to the current element in the names array.
    }
    console.log(names);

