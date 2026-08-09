let a = 10;
console.log( ++a + a + a++);   // 11 + 11 + 11 = 33 
console.log(a);  // 12

// A = ++a = 11
// B = a = 11
// C = a++ = 11 
// but line no 3 a will be 12 now

let i = 1;
let result = i++ + ++i;  // 4
console.log(result, i); // 3

// A = i++ = 1  -> i = 2
// B = ++i = 3  -> i = 3


let a1 = 34;
let result1 = a1++;  
console.log(result1);  // 34
console.log(a1);  // 35
