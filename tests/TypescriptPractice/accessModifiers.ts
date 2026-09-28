
//Public:  access modifier allows the class members to be accessible from anywhere. It is the default access modifier in TypeScript.

// class Students{
//     public studentName: string[] = ["John Doe","Upendra","Suresh"];
// }
// let student1 = new Students();
// // console.log(student1.studentName[1]);
// for (let i = 0; i<student1.studentName.length; i++){
//     console.log(`Name : ${student1.studentName[i]}`);
// }


// Private : access modifier restricts the access of class members to within the class only. It cannot be accessed from outside the class.

// class Students{
//     private studentName: string[] = ["John Doe","Upendra","Suresh"];
//     public printStudentName():void{
//         for (let i= 0; i<this.studentName.length; i++){
//             console.log(`Name : ${this.studentName[i]}`);
//         }
//     }
// }

// let stuNames = new Students();
// //console.log(stuNames.stuNames); // This will throw an error because studentName is private
// stuNames.printStudentName();

// class NewStudents{
//     private studentsNames : string[];
//     constructor(){
//         this.studentsNames = ["John Doe","Upendra","Suresh"];
//     }
//     public printdetails():void{
//         // console.log(`Student Names : ${this.studentsNames}`);
//          for (let i= 0; i<this.studentsNames.length; i++){
//             console.log(`Name : ${this.studentsNames[i]}`);
//         }
//     }
// }

// let namesprint = new NewStudents();
// namesprint.printdetails();


// protected : access modifier allows the class members to be accessible within the class and its subclasses. It cannot be accessed from outside the class hierarchy.

class Father{
    protected landProperty : string = "Land Property";
    protected houseProperty : string = "House Property";
}
class Son extends Father{
    printFatherProperty():void{
        console.log(`Land Property : ${this.landProperty}`);
        console.log(`House Property : ${this.houseProperty}`);
    }
}
let result = new Son();
result.printFatherProperty();