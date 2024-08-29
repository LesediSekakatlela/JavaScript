let student = [
    {
        name: "Donga",
        surname: "Tshabalala",
        grade: 0,
        age: 25,
        subject: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Somila",
        surname: "N",
        grade: 12,
        age: 30,
        subject: ["Math", "Python", "JavaScript"]
    },
    {
        name: "Welile",
        surname: "zambodla",
        grade: 9,
        age: 74,
        subject: ["Java", "Go-lang", "Magic"]
    },
    {
        name: "Lesedi",
        surname: "S",
        grade: 5,
        age: 23,
        subject: ["SQL", "PHP", "Java"]
    },
    {
        name: "Savvas",
        surname: "Nicolaou",
        grade: 12,
        age: 19,
        subject: ["JavaScript", "PHP", "SQL"]
    }
];

/*Just fetching the subject*/
for (let i = 0; i < student.length; i++) {
    if (student[i].subject.includes("JavaScript")) {
        console.log("JavaScript");
    }
}


/*Fetching both name and subject*/
// for (let i = 0; i < student.length; i++) {
//     if (student[i].subject.includes("JavaScript")) {
//         console.log(student[i].name + " - JavaScript");
//     }
// }

/*Names of students that have the subject javascript*/
// for (let i = 0; i < student.length; i++) {
//     if (student[i].subject.includes("JavaScript")) {
//         console.log(student[i].name);
//     }
// }

/*This code gets the objects of the students and then displays the total number of subject javascript*/
// let count = 0;

// for (let i = 0; i < student.length; i++) {
//     if (student[i].subject.includes("JavaScript")) {
//         console.log(student[i]);
//         count++;
//     }
// }

// console.log("Total number of students with JavaScript: " + count);

