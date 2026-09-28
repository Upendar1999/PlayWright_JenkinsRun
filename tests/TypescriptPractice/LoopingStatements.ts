// for (let i=0;i<=10;i++){
// console.log(i); //It will print vertically from 0 to 10
// }

// let horizenResult = "";

// for (let i=0;i<=10;i++){
//     horizenResult = horizenResult + i + " - "; //It will print horizontally from 0 to 10
// }
// console.log(horizenResult); //It will print horizontally from 0 to 10

// let i =1;
// while(i < 10){
//     console.log(i);
//     i++;
// }

let students = [
    "John",
    "Upendra",
    "Suresh"
];
console.log(students.length);
for(let name of students){
    console.log(name);
}

let count = 0;
for (let names of students){
console.log(`Name : ${names}`);
count++;
}
console.log(`Total students: ${count}`);