// 08-08-2026

let a = 10;
let b = a;
b = 99;
console.log(a);  // 10

// Call by value
// PRIMITIVE Data Type
// Primitive, number, String, boolean, null, undefined


console.log("------")

// Objects  - copied by Reference, call by ref
// Reference - object, array, function
let obj1 = { val :10 };
let obj2 = obj1
obj2.val = 99; 
console.log(obj1.val);  // 99
