// 13-08-2026

console.log("Test 1 : started");

setTimeout(function(){
    console.log("Test 2 : API response is received")
}, 5000); // will execute after 5 seconds

console.log("Test 3 : Moving to next lane");

// Test 1 : started
// Test 3 : Moving to next lane
// Test 2 : API response is received