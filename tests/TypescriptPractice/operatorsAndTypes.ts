
function validateUser(username:string,password:string, isActive:boolean):boolean {

    if( username === "admin" && password === "admin123" && isActive ){
        return true;
    }
    return false;
}

console.log(validateUser("admin","admin123",true));

// Real Playwright example

function canLogin(username:string,password:string,buttonEnabled:boolean):boolean {

    return username !== "" && password !== "" && buttonEnabled;
}


console.log(canLogin("ddfd","admin123",true));


let Age : number = 18;
let VoteAge = (Age>=18)?"Adult":"Minor";
console.log(VoteAge);