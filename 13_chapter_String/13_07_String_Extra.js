// 08-08-2026

let url = "https://app.vwo.con?app=rohit";
console.log(url.replace(/app/g, "qa"));  // https://qa.vwo.con?qa=rohit  (g = global)

// Splitting and Joining
console.log("pass,fail,skip".split(",")); // [ 'pass', 'fail', 'skip' ]
console.log("hello".split(""));  // [ 'h', 'e', 'l', 'l', 'o' ]

// Template literal (joining wirth format)
let parts = ["2026","06","11"];
let date = parts.join("-");
console.log(date);  // 2026-06-11