// 06-08-2026

// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
url.includes("staging");   // true
url.includes("production");// false

// startsWith / endsWith
url.startsWith("https");  // true
url.startsWith("http://");  // false
url.endsWith("true");    // true


// indexOf / lastIndexOf
console.log(url.indexOf("a")); // 10
console.log(url.lastIndexOf("a")); // 24
console.log(url.indexOf("nothere")); // -1

// ASCII -> A -> 65