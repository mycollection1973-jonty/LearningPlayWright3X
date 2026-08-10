// 04-08-2026

// var a = undefined // Declaration hoisted
console.log(a);  // undefined
var a = "Freeman";
console.log(a);  // Freeman

// ---- Phase 1: Memory Creation ----

// var a1  = undefined;
// var b1  = undefined;
console.log(a1); // undefind
var a1 = "Pramod";
console.log(a1); // changed

// Hoisting does NOT physically move your code. 
// It is a mental model to understand how the
// JS engine handles declarations during compilation.