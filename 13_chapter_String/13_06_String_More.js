// 08-08-2026

let str = "  Hello, World!  ";
console.log(str.toUpperCase());  //  HELLO, WORLD! 
console.log(str.toLowerCase());  //  hello, world!  

// Trim whitespace
console.log(str.trim());  //Hello, World!
console.log(str.trimStart());  //Hello, World!
console.log(str.trimEnd());    //  Hello, World!

// Replace
let msg = "Test : FAIL, Retry : FAIL";
console.log(msg.replace("FAIL", "PASS"));  // Test : PASS, Retry : FAIL
console.log(msg.replaceAll("FAIL","PASS"));// Test : PASS, Retry : PASS
console.log(msg.replace(/FAIL/g, "PASS"));  // replace all with Regex

// Concatenation
let c1 = "Hello"+" "+"World!";
let c2 = "Hello".concat(" ","World!");
//let c3 = `${Hello} ${World}`;
console.log(c1);  //Hello World!
console.log(c2);  //Hello World!
//console.log(c3);
