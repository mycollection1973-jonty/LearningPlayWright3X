// 08-08-2026

// let a = { status : "pass"};
// console.log(a.status);     // pass
// console.log(a["status"]);  // pass

// let a1 = { status : 'pass'};
// console.log(a1.status);   // pass

// keys are case sensitive
// let a2 = { status : "pass", Status : "fail"};
// console.log(a2.status);  // pass
// console.log(a2.Status);  // fail

let a = { status : "pass"};
let b = a; // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status);  // fail
console.log(b.status);  // fail

let c = { status : "pass"};
let d = { status : "pass"};
console.log(c === d); // false

const t_json = {
    "name" : "rohit",
    "age" : 32
};
console.log(t_json);  // { name: 'rohit', age: 32 }

const t_js = {
    name : "rohit",
    age : 32
};
console.log(t_js); // { name: 'rohit', age: 32 }