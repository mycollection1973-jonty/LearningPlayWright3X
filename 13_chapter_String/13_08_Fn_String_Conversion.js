// 08-08-2026

// String conversion

// To String
console.log((200).toString()); // 200
console.log(true.toString());  // true

Number("42");  // 42

console.log(parseInt("42px"));     // 42
console.log(parseFloat("3.13rem"));  // 3.13

let str = "hello";  // Things are immutable in nature
str[0] = "H";
console.log(str);  // hello

let upper = str.toUpperCase();
console.log(str);   // hello
console.log(upper); // HELLO