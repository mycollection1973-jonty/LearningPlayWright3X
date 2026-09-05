// 05-09-2026

function getString(name : string) : string {
    return "David";
}

getString("Carl");


// Generic // we can have multiple datatype for this for <T>

function getFirstResult<T>(result:T[])
{
    return result[0]!; // ! = non null assertion operator
}

let firstNumber = getFirstResult<number>([200, 400, 500]);
let firstString = getFirstResult<string>(["Login", "Signup", "Cart"]);
let firstBoolean = getFirstResult<boolean>([true, false, true]);
console.log("First Code:", firstNumber);  // First Code: 200
console.log("First Test:", firstString); // First Test: Login
console.log("First Boolean:", firstBoolean); // First Boolean: true