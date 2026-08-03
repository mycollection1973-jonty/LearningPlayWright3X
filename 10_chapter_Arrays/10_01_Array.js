//25-07-2026

let fruit = [];
let browsers = ["chrome", "firefox", "edge"];
console.log(typeof browsers);

console.log(browsers[0]);  // chrome
console.log(browsers.at(-1));  // edge
console.log(browsers.length); // 3
console.log(fruit.length);

// For the Negative indexed, use the at
console.log(browsers[-1]);   // undefined
console.log(browsers.at(0));  // chrome