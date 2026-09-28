// string --> Text values
// number --> Numbers
// boolean -->True/false values
// null --> Intentional empty value
// undefined --> Value is not assigned
// any --> Can hold values of any type
// unknown --> Similar to any, but requires type checking before use
// void --> Used for functions that don't return a value
// object --> Collection of key-value pairs

// function logInCredentials(username : string, password : string):void{
// console.log(`Username : ${username} Password : ${password}`);
// }
// logInCredentials ("admin","password");

// function logInCredentials(username : number, password : number):number{
// // console.log("Username : " +username);
// return username * password;
// }
// // logInCredentials ("admin","password");
// console.log(logInCredentials (10,20));

// function logInCredentials():unknown|null {
//     // console.log("Username : " + username);
//     return;
// }

// console.log(logInCredentials());

// ************ Object ****************
// let EmployeeDetails :{
//     EmpName : string,
//     EmpId : string,
//     greetMessage : "Hello, Welcome to the company",
//     EmpGreet : () => void;
// } = {
//     EmpName : "John Doe",
//     EmpId : "EMP12345",
//     greetMessage : "Hello, Welcome to the company",
//     EmpGreet : function() {
//         console.log(this.greetMessage);
//     }
// };

// console.log(EmployeeDetails.EmpName);
// EmployeeDetails.EmpGreet();

type EmployeeDetails = {
    EmpName : string[],
    EmpId : string[],   
};
let BNMEmployee : EmployeeDetails ={
    EmpName: ["John Doe","Upendra","Suresh"],
    EmpId: ["EMP12345","EMP12346","EMP12347"]
};
console.log(BNMEmployee.EmpName[0]);
console.log(BNMEmployee.EmpId[0]);

for(let i=0; i<BNMEmployee.EmpName.length; i++){
   console.log(`Name : ${BNMEmployee.EmpName[i]} ID : ${BNMEmployee.EmpId[i]}`);
    // console.log(`${Employee.EmpId[i]}`);
}

let MAYEmployee : EmployeeDetails ={
    EmpName: ["Upendar","Suresh","Mahesh"],
    EmpId: ["EMP12348","EMP12349","EMP12350"]
};

for (let i = 0;i<MAYEmployee.EmpName.length;i++){
    console.log(`Name : ${MAYEmployee.EmpName[i]} ID : ${MAYEmployee.EmpId[i]}`);
}