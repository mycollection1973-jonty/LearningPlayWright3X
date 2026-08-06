// 06-08-2026

let url ="https://app.vwo.com";
let status = "pass";
let message = `Test completed in ${320}ms`;

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name = "Karry";
let msg = `Hello, ${name}! 2 + 2 = ${2+2}`;
console.log(msg)

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(String(200));  // convert number to String
String(true);   //  "true"
String(null); // "null"
String([1, 2]); // "[1,2]"