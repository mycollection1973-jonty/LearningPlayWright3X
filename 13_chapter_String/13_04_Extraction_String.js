// 08-08-2026

// Extracting Substrings

let str = "Login_Test_Pass_001";

// slice (start, end) - negative indexes supported (start, end-1)
console.log(str.slice(0,5));  // (0,4) -> Login
console.log(str.slice(11));  // Pass_001
console.log(str.slice(-3));  // 001

let testNumber = str.slice(-3);
console.log(testNumber);  // 001

// substring(start, end) - no negatives (treats as 0)
console.log(str.substring(6,10));  // Test

// at() for single character
console.log(str.at(0));   // L
console.log(str.at(-1));  // 1