// 04-08-2026

console.log(username);
let username = "Mike";
console.log(username);

// ReferenceError: Cannot access 'username' before initialization
// not allowed hoisting in let

console.log(username);
const username = "Mike";
console.log(username);

// ReferenceError: Cannot access 'username' before initialization
// not allowed hoisting in const
